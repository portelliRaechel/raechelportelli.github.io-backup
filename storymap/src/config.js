var config = {
  style: "mapbox://styles/curmudgeonphd/ckwi6az9e2dqv14lhfdni23w0",
  accessToken:
    "pk.eyJ1IjoiY3VybXVkZ2VvbnBoZCIsImEiOiJja3VxNjkxN2k0c2w0MnptbjU0N242cHFzIn0.DI3yxzJz-CO25QvNLXESOQ",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "dark",
  use3dTerrain: false,
  title: "More than Salem",
  //subtitle: "A descriptive and interesting subtitle to draw in the reader",
  byline: "By R.A. Portelli",
  footer: "Source: source citations, etc.",
  chapters: [
    {
      id: "slug-style-id",
      alignment: "left",
      hidden: false,
      title: "1607 - 1739",
      description:
        "The history of the Salm Witch Trials are taught in many U.S. school classes each year. These trials were only a fraction of the witch trials that occured in the original colonies. This map shows the distribution of 274 such accusations along the East Coast.",
      location: {
        center: [-78.13, 39.02],
        zoom: 4.75,
         pitch: 0,
         bearing: 0
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        // {
        //     layer: 'layer-name',
        //     opacity: 1,
        //     duration: 5000
        // }
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "other-identifier",
      alignment: "right",
      hidden: false,
      title: "The Salem Witch Trials",
      description:
        "The Salem Witch Trials began in the spring of 1692. The first victim, Bridget Bishop, was hung on June 10th. By the fall, over 150 men, women, and children were accused of witchcraft. By spring of 1693, those imprisonated for witchcraft were exonerated. However, the final death toll included 19 were hanged on Gallows Hill, an elderly man was pressed to death, and several others died in jail.",
      location: {
        center: [-70.7866, 42.53],
        zoom: 4.75,
         pitch: 60,
         bearing: 0
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
