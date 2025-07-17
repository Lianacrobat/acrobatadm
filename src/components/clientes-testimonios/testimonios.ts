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
		texto: "Es muy dificil conseguir repuestos de alta calidad para nuestros espectaculos, pero Lian nos ha ayudado a conseguirlos hasta la ultima pieza. y todo llega en perfectas condiciones.",
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
		texto: "En la gimnasia, los costos de aparatos nuevos son altisimos. sin embargo Lian nos ha ayudado a conseguirlos a un precio accesible y de muy buena calidad. Lian nos ha enseñado que en china hay productos muy buenos, solo es cuestion de conseguir los proveedores ideales, y lian los tiene.",
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
		texto: "El catalogo que ofrece Acrobata Demente es muy bueno, y los precios son muy accesibles. Ademas, la calidad de los productos es muy buena. Hay de todo, desde aparatos de gimnasia hasta accesorios para circo.",
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
		texto: "Lian es un gran amigo y un gran profesional, su trabajo es excelente y su equipo es muy profesional.",
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
		texto: "Lian es un gran amigo y un gran profesional, su trabajo es excelente y su equipo es muy profesional.",
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
		texto:"Lian es un gran artista y un gran profesional, su trabajo es implacable y su dedicacion al detalle es excelente.",
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
		texto: "Lian es un gran artista y un gran profesional, su trabajo es implacable y su dedicacion al detalle es increible.",
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
		texto:
			"Lian es un gran artista y un gran profesional, su trabajo es implacable y su dedicacion al detalle es increible.",
		fecha: "2024-02-15",
		verificado: true,
		pais: "Chile",
		instagram: "h.ismael720",
	},

];