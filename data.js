var APP_DATA = {
  "scenes": [
    {
      "id": "0-salon",
      "name": "SALON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.18944755698919025,
        "pitch": 0.0572873658114208,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": 0.4729807937269648,
          "pitch": 0.12665747051842047,
          "rotation": 0,
          "target": "1-salon_1"
        },
        {
          "yaw": 0.5794856837490059,
          "pitch": 0.12402017833898782,
          "rotation": 7.0685834705770345,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon_1",
      "name": "SALON_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.13803967720318333,
        "pitch": 0.014321841452860085,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": -0.7284669225392157,
          "pitch": 0.10244674162879619,
          "rotation": 0,
          "target": "0-salon"
        },
        {
          "yaw": -0.906406845932878,
          "pitch": 0.20555071539757996,
          "rotation": 4.71238898038469,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dormitorio",
      "name": "DORMITORIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.2422284454517225,
        "pitch": 0.38939485515066785,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": 0.9585610764880705,
          "pitch": 0.18863031210537073,
          "rotation": 0,
          "target": "1-salon_1"
        },
        {
          "yaw": -2.212894397257397,
          "pitch": 0.24456290834999095,
          "rotation": 0,
          "target": "4-bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pasillo",
      "name": "PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.23990343900139166,
        "pitch": 0.07421317843751574,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": -2.8664590972446433,
          "pitch": 0.3450858142090887,
          "rotation": 0,
          "target": "1-salon_1"
        },
        {
          "yaw": 0.2720169650437505,
          "pitch": 0.13760739976301295,
          "rotation": 0,
          "target": "4-bao"
        },
        {
          "yaw": 0.5305517494547356,
          "pitch": 0.15128549313436856,
          "rotation": 0.7853981633974483,
          "target": "2-dormitorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bao",
      "name": "BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.45300467249974474,
        "pitch": 0.22755951849471856,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": 1.2586351612233262,
          "pitch": 0.23261738714142766,
          "rotation": 0.7853981633974483,
          "target": "3-pasillo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PLANTA.BAJA.B",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
