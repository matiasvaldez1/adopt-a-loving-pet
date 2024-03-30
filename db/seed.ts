import { PetPosting, PetType, Poster, db } from "astro:db";

export default async function seed() {
  const posters = await db
    .insert(Poster)
    .values([
      {
        name: "Fernanda",
        presentation: "Soltera amante de las mascotas",
        profilePicture:
          "https://pbs.twimg.com/profile_images/1632785343433908224/SnMGR19O_400x400.png",
      },
      {
        name: "Casa de perros miguel",
        presentation: "Somos una casa de perros que se dedica a etc",
        profilePicture:
          "https://pbs.twimg.com/profile_images/1453818753880190978/HqrrEcrI_400x400.png",
      },
      {
        name: "Marta",
        presentation: "Abuela de 3 enamorada de los animales",
        profilePicture:
          "https://pbs.twimg.com/profile_images/1461144163789983748/N5iAWd2d_400x400.jpg",
      },
    ])
    .returning();

  const petTypes = await db
    .insert(PetType)
    .values([
      {
        title: "Labrador Retriever",
        value: "labrador_retriever",
      },
      {
        title: "Bulldog",
        value: "bulldog",
      },
      {
        title: "Golden Retriever",
        value: "golden_retriever",
      },
      {
        title: "German Shepherd",
        value: "german_shepherd",
      },
    ])
    .returning();

  await db.insert(PetPosting).values([
    {
      title: "Cachorros de Labrador Retriever",
      posterId: posters[0].id,
      description:
        "Adorables cachorros de Labrador Retriever buscando hogares amorosos.",
      type: petTypes[0].id,
      location: "Nueva York, NY",
      posted: new Date("2022-12-13"),
      richText: `<h2>Sobre el puesto</h2>
			  <p>
				  Como el primer contratado en diseño de productos en PermitFlow, trabajarás con el
				  CTO y el equipo de ingeniería para liderar y ejecutar el diseño y la estrategia de
				  la experiencia del producto de PermitFlow. Somos el software líder en aplicaciones de permisos de construcción
				  para constructores. Nuestro equipo actual está formado por ingenieros de Uber, Amazon, Stripe, NerdWallet, Harvard, Stanford y
				  más.
			  </p>`,
    },
    {
      title: "Mezcla de Bulldog en Adopción",
      posterId: posters[2].id,
      description:
        "Dulce mezcla de Bulldog que necesita un hogar para siempre.",
      type: petTypes[1].id,
      location: "Remoto",
      posted: new Date("2021-12-13"),
      richText: `<h2>Sobre el puesto</h2>
		  <p>
			  Como el primer contratado en diseño de productos en PermitFlow, trabajarás con el
			  CTO y el equipo de ingeniería para liderar y ejecutar el diseño y la estrategia de
			  la experiencia del producto de PermitFlow. Somos el software líder en aplicaciones de permisos de construcción
			  para constructores. Nuestro equipo actual está formado por ingenieros de Uber, Amazon, Stripe, NerdWallet, Harvard, Stanford y
			  más.
		  </p>`,
    },
    {
      title: "Rescate de Golden Retriever",
      posterId: posters[1].id,
      description:
        "Golden Retriever rescatado buscando una segunda oportunidad.",
      type: petTypes[0].id,
      location: "Gante, Bélgica",
      posted: new Date("12/13/2020"),
      richText: `<h2>Sobre el puesto</h2>
		  <p>
			  Como el primer contratado en un rol increíble en meta, trabajarás con el
			  CTO y el equipo de ingeniería para liderar y ejecutar el diseño y la estrategia de
			  la experiencia del producto de PermitFlow. Somos el software líder en aplicaciones de permisos de construcción
			  para constructores. Nuestro equipo actual está formado por ingenieros de Uber, Amazon, Stripe, NerdWallet, Harvard, Stanford y
			  más.
		  </p>`,
    },
    {
      title: "Asistente Remoto",
      posterId: posters[0].id,
      description:
        "Marco de trabajo de sitio web de código abierto con enfoque en contenido",
      type: petTypes[2].id,
      location: "Remoto",
      posted: new Date("2019-12-13"),
      richText: `<h2>Sobre el puesto</h2>
			  <p>
				  Como asistente remoto, trabajarás con el CTO y el equipo de ingeniería para
				  liderar y ejecutar el diseño y la estrategia de la experiencia del producto de PermitFlow.
				  Somos el software líder en aplicaciones de permisos de construcción para constructores.
				  Nuestro equipo actual está formado por ingenieros de Uber, Amazon, Stripe, NerdWallet, Harvard, Stanford y más.
			  </p>`,
    },
  ]);
}
