/**
 * Script de accesibilidad mejorada para componentes de navegación
 * Maneja navegación por teclado, focus management y mejoras de UX
 */

class AccessibilityManager {
	constructor() {
		this.focusableElements = 'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
		this.trapFocus = false;
		this.lastFocusedElement = null;
		this.init();
	}

	init() {
		this.setupKeyboardNavigation();
		this.setupFocusManagement();
		this.setupTooltipAccessibility();
		this.setupReducedMotion();
		this.setupHighContrast();
	}

	/**
	 * Configurar navegación por teclado mejorada
	 */
	setupKeyboardNavigation() {
		document.addEventListener('keydown', (e) => {
			switch (e.key) {
				case 'Tab':
					this.handleTabNavigation(e);
					break;
				case 'Escape':
					this.handleEscapeKey(e);
					break;
				case 'ArrowUp':
				case 'ArrowDown':
					this.handleArrowNavigation(e);
					break;
				case 'Home':
				case 'End':
					this.handleHomeEndNavigation(e);
					break;
				case 'Enter':
				case ' ':
					this.handleActivation(e);
					break;
			}
		});
	}

	/**
	 * Manejar navegación con Tab
	 */
	handleTabNavigation(e) {
		const sidebar = document.querySelector('aside[role="navigation"]');
		if (!sidebar) return;

		const focusableElements = sidebar.querySelectorAll(this.focusableElements);
		const firstElement = focusableElements[0];
		const lastElement = focusableElements[focusableElements.length - 1];

		// Trap focus dentro del sidebar si está activo
		if (this.trapFocus) {
			if (e.shiftKey && document.activeElement === firstElement) {
				e.preventDefault();
				lastElement.focus();
			} else if (!e.shiftKey && document.activeElement === lastElement) {
				e.preventDefault();
				firstElement.focus();
			}
		}
	}

	/**
	 * Manejar tecla Escape
	 */
	handleEscapeKey(e) {
		// Cerrar tooltips activos
		const activeTooltips = document.querySelectorAll('[role="tooltip"]:not([aria-hidden="true"])');
		activeTooltips.forEach(tooltip => {
			tooltip.setAttribute('aria-hidden', 'true');
		});

		// Restaurar focus si es necesario
		if (this.lastFocusedElement) {
			this.lastFocusedElement.focus();
			this.lastFocusedElement = null;
		}
	}

	/**
	 * Manejar navegación con flechas en el sidebar
	 */
	handleArrowNavigation(e) {
		const sidebar = document.querySelector('aside[role="navigation"]');
		if (!sidebar || !sidebar.contains(document.activeElement)) return;

		const navLinks = sidebar.querySelectorAll('a[role="link"], a');
		const currentIndex = Array.from(navLinks).indexOf(document.activeElement);

		if (currentIndex === -1) return;

		e.preventDefault();

		let nextIndex;
		if (e.key === 'ArrowDown') {
			nextIndex = (currentIndex + 1) % navLinks.length;
		} else {
			nextIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
		}

		navLinks[nextIndex].focus();
	}

	/**
	 * Manejar navegación Home/End
	 */
	handleHomeEndNavigation(e) {
		const sidebar = document.querySelector('aside[role="navigation"]');
		if (!sidebar || !sidebar.contains(document.activeElement)) return;

		const navLinks = sidebar.querySelectorAll('a[role="link"], a');
		if (navLinks.length === 0) return;

		e.preventDefault();

		if (e.key === 'Home') {
			navLinks[0].focus();
		} else {
			navLinks[navLinks.length - 1].focus();
		}
	}

	/**
	 * Manejar activación con Enter/Space
	 */
	handleActivation(e) {
		const target = e.target;
		
		// Si es un enlace o botón, permitir comportamiento por defecto
		if (target.tagName === 'A' || target.tagName === 'BUTTON') {
			return;
		}

		// Si tiene rol de botón o enlace, simular click
		if (target.getAttribute('role') === 'button' || target.getAttribute('role') === 'link') {
			e.preventDefault();
			target.click();
		}
	}

	/**
	 * Configurar gestión de focus mejorada
	 */
	setupFocusManagement() {
		// Indicadores visuales de focus mejorados
		document.addEventListener('focusin', (e) => {
			const target = e.target;
			
			// Añadir clase para focus visible
			if (this.isKeyboardUser()) {
				target.classList.add('focus-visible');
			}

			// Scroll suave hacia el elemento enfocado si está fuera de vista
			this.scrollIntoViewIfNeeded(target);
		});

		document.addEventListener('focusout', (e) => {
			e.target.classList.remove('focus-visible');
		});

		// Detectar si el usuario está usando teclado
		document.addEventListener('keydown', () => {
			document.body.classList.add('keyboard-user');
		});

		document.addEventListener('mousedown', () => {
			document.body.classList.remove('keyboard-user');
		});
	}

	/**
	 * Configurar accesibilidad de tooltips
	 */
	setupTooltipAccessibility() {
		// Manejar tooltips con teclado
		document.addEventListener('focusin', (e) => {
			const target = e.target;
			const tooltip = target.querySelector('[role="tooltip"]');
			
			if (tooltip) {
				tooltip.setAttribute('aria-hidden', 'false');
				tooltip.style.opacity = '1';
				tooltip.style.transform = 'scale(1)';
			}
		});

		document.addEventListener('focusout', (e) => {
			const target = e.target;
			const tooltip = target.querySelector('[role="tooltip"]');
			
			if (tooltip) {
				tooltip.setAttribute('aria-hidden', 'true');
				tooltip.style.opacity = '0';
				tooltip.style.transform = 'scale(0.95)';
			}
		});
	}

	/**
	 * Configurar soporte para movimiento reducido
	 */
	setupReducedMotion() {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		
		const handleReducedMotion = (mediaQuery) => {
			if (mediaQuery.matches) {
				document.body.classList.add('reduce-motion');
				// Reducir o eliminar animaciones
				document.documentElement.style.setProperty('--animation-duration', '0.01ms');
				document.documentElement.style.setProperty('--transition-duration', '0.01ms');
			} else {
				document.body.classList.remove('reduce-motion');
				document.documentElement.style.removeProperty('--animation-duration');
				document.documentElement.style.removeProperty('--transition-duration');
			}
		};

		handleReducedMotion(prefersReducedMotion);
		prefersReducedMotion.addEventListener('change', handleReducedMotion);
	}

	/**
	 * Configurar soporte para alto contraste
	 */
	setupHighContrast() {
		const prefersHighContrast = window.matchMedia('(prefers-contrast: high)');
		
		const handleHighContrast = (mediaQuery) => {
			if (mediaQuery.matches) {
				document.body.classList.add('high-contrast');
			} else {
				document.body.classList.remove('high-contrast');
			}
		};

		handleHighContrast(prefersHighContrast);
		prefersHighContrast.addEventListener('change', handleHighContrast);
	}

	/**
	 * Verificar si el usuario está usando teclado
	 */
	isKeyboardUser() {
		return document.body.classList.contains('keyboard-user');
	}

	/**
	 * Scroll suave hacia elemento si es necesario
	 */
	scrollIntoViewIfNeeded(element) {
		const rect = element.getBoundingClientRect();
		const isVisible = (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);

		if (!isVisible) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'nearest'
			});
		}
	}

	/**
	 * Activar/desactivar trap de focus
	 */
	setFocusTrap(enabled, container = null) {
		this.trapFocus = enabled;
		if (enabled && container) {
			this.lastFocusedElement = document.activeElement;
			const firstFocusable = container.querySelector(this.focusableElements);
			if (firstFocusable) {
				firstFocusable.focus();
			}
		}
	}

	/**
	 * Anunciar cambios a lectores de pantalla
	 */
	announce(message, priority = 'polite') {
		const announcer = document.createElement('div');
		announcer.setAttribute('aria-live', priority);
		announcer.setAttribute('aria-atomic', 'true');
		announcer.className = 'sr-only';
		announcer.textContent = message;
		
		document.body.appendChild(announcer);
		
		// Remover después de anunciar
		setTimeout(() => {
			document.body.removeChild(announcer);
		}, 1000);
	}
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		new AccessibilityManager();
	});
} else {
	new AccessibilityManager();
}

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
	module.exports = AccessibilityManager;
}

// Hacer disponible globalmente
window.AccessibilityManager = AccessibilityManager;