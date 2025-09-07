export interface Testimonio {
	id: number;
	nombre: string;
	cargo: string;
	empresa: string;
	foto: string;
	texto: string;
	fecha: string;
	verificado: boolean;
	pais: string;
	instagram?: string;
}

export const testimonios: Testimonio[] = [
	{
		id: 1,
		nombre: "Lolo Godoy",
		cargo: "Empresario",
		empresa: "Circo Acuatico Vazquez",
		foto: "@public/assets/images/testimonios/circoVazques.jpg",
		texto: "Lian es uno de los pioneros en Chile en traer implementacion acrobatica para los circos, su trabajo es excelente y su equipo es muy profesional.",
		fecha: "2024-03-15",
		verificado: true,
		pais: "Chile, USA",
		instagram: "circo_vasquezchile",
	},
	{
		id: 2,
		nombre: "Angel Fuentes",
		cargo: "Artista",
		empresa: "Circo de los Espectaculares Hermanos Fuentes Gasca de Mexico",
		foto: "@public/assets/images/testimonios/angelFuentes.jpg",
		texto: "La calidad de los equipos que nos proporciona Lian es excepcional. Cada pieza llega en perfectas condiciones y el servicio postventa es impecable. Recomiendo totalmente sus productos.",
		fecha: "2024-03-10",
		verificado: true,
		pais: "Ecuador, México",
		instagram: "angelfuentes",
	},
	{
		id: 3,
		nombre: "Saari Peña",
		cargo: "Coach",
		empresa: "Gymloa",
		foto: "@public/assets/images/testimonios/saariPena.jpg",
		texto: "Trabajar con Acrobata Demente ha sido una experiencia increíble. Los precios son justos y la calidad supera nuestras expectativas. Lian conoce perfectamente el mercado y siempre encuentra las mejores opciones.",
		fecha: "2024-03-05",
		verificado: true,
		pais: "Chile",
		instagram: "saari.pena",
	},
	{
		id: 4,
		nombre: "Raul Parada",
		cargo: "Head Coach",
		empresa: "Cheerleading Dreams All Stars",
		foto: "@public/assets/images/testimonios/raulParada.jpg",
		texto: "La variedad de productos que maneja Lian es impresionante. Desde colchonetas hasta equipos especializados, todo de primera calidad. Su atención personalizada hace la diferencia.",
		fecha: "2024-02-28",
		verificado: true,
		pais: "Chile",
		instagram: "raul_parada.dreamsallstars",
	},
	{
		id: 5,
		nombre: "Camilo Rodriguez",
		cargo: "Head Coach",
		empresa: "Gimnasia Artistica universidad de Calama",
		foto: "@public/assets/images/testimonios/camiloRodriguez.jpg",
		texto: "La confiabilidad y puntualidad de Lian son excepcionales. Siempre cumple con los tiempos de entrega y la calidad prometida. Es un placer trabajar con él.",
		fecha: "2024-02-20",
		verificado: true,
		pais: "Chile",
		instagram: "milo_rodriguez",
	},
	{
		id: 6,
		nombre: "German Aguirre",
		cargo: "CEO & Empresario",
		empresa: "Sindicato del circo chileno y Circo Norteamericano",
		foto: "@public/assets/images/testimonios/germanAguirre.jpg",
		texto: "Como empresario del circo, valoro mucho la dedicación y profesionalismo de Lian. Su conocimiento del mercado acrobático es invaluable para nuestras producciones.",
		fecha: "2024-02-15",
		verificado: true,
		pais: "Chile y USA",
		instagram: "germalabar",
	},
	{
		id: 7,
		nombre: "Zhali Wang",
		cargo: "CEO & Manager",
		empresa: "Entertaiment China",
		foto: "@public/assets/images/testimonios/zhali.jpg",
		texto: "La experiencia internacional de Lian se nota en cada producto que ofrece. Su red de contactos en China nos ha permitido acceder a equipos de última generación.",
		fecha: "2024-02-15",
		verificado: true,
		pais: "China",
		instagram: "zhali_chinita",
	},
	{
		id: 8,
		nombre: "Reyli Campa",
		cargo: "Acrobat",
		empresa: "Entertaiment China",
		foto: "@public/assets/images/testimonios/reilyCampa.jpg",
		texto: "Trabajar con Lian ha elevado el nivel de nuestras presentaciones. Los equipos que nos proporciona son seguros, duraderos y de calidad profesional.",
		fecha: "2024-02-15",
		verificado: true,
		pais: "China y Cuba",
		instagram: "reyli_campa",
	},
	{
		id: 9,
		nombre: "Humberto",
		cargo: "Coach",
		empresa: "Club Gymloa",
		foto: "@public/assets/images/testimonios/humbertoIsmael.jpg",
		texto: "La pasión de Lian por la acrobacia se refleja en cada producto que vende. Su asesoramiento técnico ha sido fundamental para el crecimiento de nuestro club.",
		fecha: "2024-02-15",
		verificado: true,
		pais: "Chile",
		instagram: "h.ismael720",
	},

];