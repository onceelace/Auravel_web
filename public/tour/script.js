TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "id": "overlay_DAE85C15_D5DC_880E_41E2_6CE83D646D0B",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4, this.camera_DACA686D_D1CC_7DEC_41BD_63DF45086249); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "width": 49,
           "url": "media/panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -146.63,
        "hfov": 5.08,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -5.16
       }
      ],
      "items": [
       {
        "yaw": -146.63,
        "hfov": 5.08,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "width": 98,
           "url": "media/panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.16
       }
      ]
     },
     {
      "useHandCursor": true,
      "id": "overlay_DB376A95_D5CC_880E_41E4_A9603079F95A",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924, this.camera_DAD10858_D1CC_7D34_41DC_A5F1BC924202); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 45,
           "width": 49,
           "url": "media/panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -70.23,
        "hfov": 5.07,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.51
       }
      ],
      "items": [
       {
        "yaw": -70.23,
        "hfov": 5.07,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "width": 98,
           "url": "media/panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -8.51
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF_t.jpg"
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "id": "panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF",
  "thumbnailUrl": "media/panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF_t.jpg",
  "pitch": 0,
  "label": "View Point",
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "distance": 1,
    "panorama": {
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3456,
          "width": 6912,
          "url": "media/panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "id": "overlay_C55121AF_D5D4_981A_41DF_21FE1A635A4E",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF, this.camera_DAFD480A_D1CC_7D14_41A0_EF426C38902C); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 57,
              "width": 65,
              "url": "media/panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -144.67,
           "hfov": 6.73,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -9.36
          }
         ],
         "items": [
          {
           "yaw": -144.67,
           "hfov": 6.73,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 115,
              "width": 131,
              "url": "media/panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924_0_HS_0_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -9.36
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_C1CAA0B8_D64B_7806_41BA_AB880D15393E",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_C1F5E810_D67C_8806_41C4_09F04514A89A, this.camera_DAF5081E_D1CC_7D2C_41D4_C0638A0A9595); this.mainPlayList.set('selectedIndex', 8)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 30,
              "width": 55,
              "url": "media/panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924_0_HS_3_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -0.97,
           "hfov": 5.75,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 2.58
          }
         ],
         "items": [
          {
           "yaw": -0.97,
           "hfov": 5.75,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 61,
              "width": 110,
              "url": "media/panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924_0_HS_3_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 2.58
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924_t.jpg"
      }
     ],
     "hfovMax": 120,
     "partial": false,
     "id": "panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924",
     "thumbnailUrl": "media/panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924_t.jpg",
     "pitch": 0,
     "label": "Garden",
     "hfov": 360,
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": "this.panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF",
       "yaw": -144.67,
       "class": "AdjacentPanorama",
       "backwardYaw": -70.23
      },
      {
       "distance": 1,
       "panorama": {
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3456,
             "width": 6912,
             "url": "media/panorama_C1F5E810_D67C_8806_41C4_09F04514A89A_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_C1F5E810_D67C_8806_41C4_09F04514A89A.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "id": "overlay_CE7E567A_D64C_98FA_41CD_DD565D17CAA5",
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924, this.camera_DB1ED7BE_D1CC_736C_41B7_A03351BE9C10); this.mainPlayList.set('selectedIndex', 2)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 45,
                 "width": 49,
                 "url": "media/panorama_C1F5E810_D67C_8806_41C4_09F04514A89A_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -153.88,
              "hfov": 4.92,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -15.54
             }
            ],
            "items": [
             {
              "yaw": -153.88,
              "hfov": 4.92,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 90,
                 "width": 98,
                 "url": "media/panorama_C1F5E810_D67C_8806_41C4_09F04514A89A_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -15.54
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_CEB09F2B_D654_881A_41B2_D924854AE2D1",
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF, this.camera_DB1BF7AB_D1CC_7314_41DB_EF4BE6E09FBA); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 45,
                 "width": 49,
                 "url": "media/panorama_C1F5E810_D67C_8806_41C4_09F04514A89A_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": -0.11,
              "hfov": 5.1,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -1.8
             }
            ],
            "items": [
             {
              "yaw": -0.11,
              "hfov": 5.1,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 90,
                 "width": 98,
                 "url": "media/panorama_C1F5E810_D67C_8806_41C4_09F04514A89A_0_HS_2_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -1.8
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_C1F5E810_D67C_8806_41C4_09F04514A89A_t.jpg"
         }
        ],
        "hfovMax": 120,
        "partial": false,
        "id": "panorama_C1F5E810_D67C_8806_41C4_09F04514A89A",
        "thumbnailUrl": "media/panorama_C1F5E810_D67C_8806_41C4_09F04514A89A_t.jpg",
        "pitch": 0,
        "hfov": 360,
        "class": "Panorama",
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": {
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3456,
                "width": 6912,
                "url": "media/panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_CE947975_D64C_880E_41E6_7076FD4CBDD0",
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56, this.camera_DA31A98A_D1CC_7F14_41D7_C2F1C4991C99); this.mainPlayList.set('selectedIndex', 9)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 45,
                    "width": 49,
                    "url": "media/panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -18.85,
                 "hfov": 5.06,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -7.6
                }
               ],
               "items": [
                {
                 "yaw": -18.85,
                 "hfov": 5.06,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 90,
                    "width": 98,
                    "url": "media/panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -7.6
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_CFEA503A_D6B4_F87B_41E9_EC76924D828B",
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C1F5E810_D67C_8806_41C4_09F04514A89A, this.camera_DA2FD9AD_D1CC_7F6C_41E6_A9A6184DA468); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 45,
                    "width": 49,
                    "url": "media/panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -178.57,
                 "hfov": 4.94,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -14.42
                }
               ],
               "items": [
                {
                 "yaw": -178.57,
                 "hfov": 4.94,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 90,
                    "width": 98,
                    "url": "media/panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -14.42
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF_t.jpg"
            }
           ],
           "hfovMax": 120,
           "partial": false,
           "id": "panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF",
           "thumbnailUrl": "media/panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF_t.jpg",
           "pitch": 0,
           "label": "Pool Side",
           "hfov": 360,
           "class": "Panorama",
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3456,
                   "width": 6912,
                   "url": "media/panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_CF38C8BF_D6B4_887A_41E8_953C82C2AC3A",
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF, this.camera_DA5BF925_D1CC_7F1C_41E1_FD517A200C90); this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 45,
                       "width": 49,
                       "url": "media/panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": -103.48,
                    "hfov": 5.09,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -4.81
                   }
                  ],
                  "items": [
                   {
                    "yaw": -103.48,
                    "hfov": 5.09,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 90,
                       "width": 98,
                       "url": "media/panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -4.81
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56_t.jpg"
               }
              ],
              "hfovMax": 120,
              "partial": false,
              "id": "panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56",
              "thumbnailUrl": "media/panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56_t.jpg",
              "pitch": 0,
              "label": "Pool Side 2",
              "hfov": 360,
              "class": "Panorama",
              "hfovMin": 60,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": "this.panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF",
                "yaw": -103.48,
                "class": "AdjacentPanorama",
                "backwardYaw": -18.85
               }
              ]
             },
             "yaw": -18.85,
             "class": "AdjacentPanorama",
             "backwardYaw": -103.48
            },
            {
             "distance": 1,
             "panorama": "this.panorama_C1F5E810_D67C_8806_41C4_09F04514A89A",
             "yaw": -178.57,
             "class": "AdjacentPanorama",
             "backwardYaw": -0.11
            }
           ]
          },
          "yaw": -0.11,
          "class": "AdjacentPanorama",
          "backwardYaw": -178.57
         },
         {
          "distance": 1,
          "panorama": "this.panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924",
          "yaw": -153.88,
          "class": "AdjacentPanorama",
          "backwardYaw": -0.97
         }
        ]
       },
       "yaw": -0.97,
       "class": "AdjacentPanorama",
       "backwardYaw": -153.88
      }
     ]
    },
    "yaw": -70.23,
    "class": "AdjacentPanorama",
    "backwardYaw": -144.67
   },
   {
    "distance": 1,
    "panorama": {
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3456,
          "width": 6912,
          "url": "media/panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4.jpeg",
          "class": "ImageResourceLevel"
         }
        ]
       },
       "overlays": [
        {
         "useHandCursor": true,
         "id": "overlay_C5E35F55_D5D4_880E_41E2_712010E6E010",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2, this.camera_DA7C98EE_D1CC_7EEC_41DE_D54840645DF7); this.mainPlayList.set('selectedIndex', 3)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 45,
              "width": 49,
              "url": "media/panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4_0_HS_4_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": 102.92,
           "hfov": 5.09,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -4.89
          }
         ],
         "items": [
          {
           "yaw": 102.92,
           "hfov": 5.09,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 90,
              "width": 98,
              "url": "media/panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4_0_HS_4_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": -4.89
          }
         ]
        },
        {
         "useHandCursor": true,
         "id": "overlay_C9828CD1_D895_7174_41AD_C54BEB21D936",
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF, this.camera_DA80D8DB_D1CC_7D34_41DE_E05DEFDB79D4); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 143,
              "width": 200,
              "url": "media/panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4_0_HS_5_1_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "yaw": -14.33,
           "hfov": 36.09,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 7.69
          }
         ],
         "items": [
          {
           "yaw": -14.33,
           "hfov": 36.09,
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 515,
              "width": 716,
              "url": "media/panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4_0_HS_5_0.png",
              "class": "ImageResourceLevel"
             }
            ]
           },
           "pitch": 7.69
          }
         ]
        }
       ],
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4_t.jpg"
      }
     ],
     "hfovMax": 120,
     "partial": false,
     "id": "panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4",
     "thumbnailUrl": "media/panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4_t.jpg",
     "pitch": 0,
     "hfov": 360,
     "class": "Panorama",
     "hfovMin": 60,
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "distance": 1,
       "panorama": "this.panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF",
       "yaw": -14.33,
       "class": "AdjacentPanorama",
       "backwardYaw": -146.63
      },
      {
       "distance": 1,
       "panorama": {
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3456,
             "width": 6912,
             "url": "media/panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2.jpeg",
             "class": "ImageResourceLevel"
            }
           ]
          },
          "overlays": [
           {
            "useHandCursor": true,
            "id": "overlay_C68F0567_D5D4_9809_41D6_3F2B6D5C923D",
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD, this.camera_DA09E9F7_D1CC_7EFC_41C6_EA60F2D78554); this.mainPlayList.set('selectedIndex', 4)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "width": 164,
                 "url": "media/panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2_0_HS_0_1_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 3.22,
              "hfov": 21.83,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": 3.06
             }
            ],
            "items": [
             {
              "yaw": 3.22,
              "hfov": 21.83,
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 517,
                 "width": 424,
                 "url": "media/panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2_0_HS_0_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": 3.06
             }
            ]
           },
           {
            "useHandCursor": true,
            "id": "overlay_C196C6CD_D5CC_981E_41E1_8E60A67DDF1D",
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4, this.camera_DA1B99D4_D1CC_7F3C_41E9_A287A1482095); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 45,
                 "width": 49,
                 "url": "media/panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "yaw": 88.62,
              "hfov": 5.02,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -10.49
             }
            ],
            "items": [
             {
              "yaw": 88.62,
              "hfov": 5.02,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 90,
                 "width": 98,
                 "url": "media/panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2_0_HS_1_0.png",
                 "class": "ImageResourceLevel"
                }
               ]
              },
              "pitch": -10.49
             }
            ]
           }
          ],
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2_t.jpg"
         }
        ],
        "hfovMax": 120,
        "partial": false,
        "id": "panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2",
        "thumbnailUrl": "media/panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2_t.jpg",
        "pitch": 0,
        "label": "Hotel Entrance",
        "hfov": 360,
        "class": "Panorama",
        "hfovMin": 60,
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "distance": 1,
          "panorama": "this.panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4",
          "yaw": 88.62,
          "class": "AdjacentPanorama",
          "backwardYaw": 102.92
         },
         {
          "distance": 1,
          "panorama": {
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3456,
                "width": 6912,
                "url": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "width": 3217,
                "url": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD.jpeg",
                "class": "ImageResourceLevel"
               }
              ]
             },
             "overlays": [
              {
               "useHandCursor": true,
               "id": "overlay_C1CA8500_D5D4_9806_41E3_8B8ABEE09295",
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2, this.camera_DA9588C9_D1CC_7D17_417C_B78401904125); this.mainPlayList.set('selectedIndex', 3)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 45,
                    "width": 49,
                    "url": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -175.74,
                 "hfov": 4.67,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -23.77
                }
               ],
               "items": [
                {
                 "yaw": -175.74,
                 "hfov": 4.67,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 90,
                    "width": 98,
                    "url": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_0_HS_0_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -23.77
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_C0E78FF4_D5CC_880E_41E6_D9F5C6CB8919",
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A, this.camera_DAA678B8_D1CC_7D74_41DF_9FF72FE9C517); this.mainPlayList.set('selectedIndex', 5)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "width": 132,
                    "url": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_0_HS_1_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": 40.58,
                 "hfov": 29.43,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -1.99
                }
               ],
               "items": [
                {
                 "yaw": 40.58,
                 "hfov": 29.43,
                 "class": "HotspotPanoramaOverlayImage",
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 868,
                    "width": 577,
                    "url": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_0_HS_1_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -1.99
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_C9841DA2_D64F_880A_41CE_5152AB043E29",
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "rollOut": "this.playGlobalAudioWhilePlay(this.mainPlayList, 4, this.audio_C8A649FA_D64D_8BFA_41D5_3EB7FAF8AFE3)"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 27,
                    "width": 43,
                    "url": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_0_HS_2_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -58.88,
                 "hfov": 4.57,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -3.01
                }
               ],
               "items": [
                {
                 "yaw": -58.88,
                 "hfov": 4.57,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 55,
                    "width": 87,
                    "url": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_0_HS_2_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": -3.01
                }
               ]
              },
              {
               "useHandCursor": true,
               "id": "overlay_F358B80C_D64C_881E_41E5_32CEF6BB2CA8",
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D, this.camera_DAAA98A5_D1CC_7D1C_41E2_ABCD2F16B420); this.mainPlayList.set('selectedIndex', 10)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "width": 83,
                    "url": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_0_HS_3_1_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "yaw": -17.73,
                 "hfov": 9.72,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": 0.51
                }
               ],
               "items": [
                {
                 "yaw": -17.73,
                 "hfov": 9.72,
                 "class": "HotspotPanoramaOverlayImage",
                 "roll": 0,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 446,
                    "width": 187,
                    "url": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_0_HS_3_0.png",
                    "class": "ImageResourceLevel"
                   }
                  ]
                 },
                 "pitch": 0.51
                }
               ]
              }
             ],
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_t.jpg"
            }
           ],
           "hfovMax": 120,
           "partial": false,
           "id": "panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD",
           "thumbnailUrl": "media/panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_t.jpg",
           "pitch": 0,
           "label": "Front Door",
           "hfov": 360,
           "class": "Panorama",
           "hfovMin": 60,
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "distance": 1,
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3456,
                   "width": 6912,
                   "url": "media/panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_C8763AFB_D7B4_89F9_41CE_7A91EA6E8605",
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD, this.camera_DAEF3831_D1CC_7D74_41DF_19D3EC9CCF6F); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "width": 134,
                       "url": "media/panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_0_HS_0_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": -113,
                    "hfov": 15.05,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -1.51
                   }
                  ],
                  "items": [
                   {
                    "yaw": -113,
                    "hfov": 15.05,
                    "class": "HotspotPanoramaOverlayImage",
                    "roll": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 432,
                       "width": 290,
                       "url": "media/panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -1.51
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_CB482383_D7B4_980A_41E7_5C6CB9BB721B",
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "width": 187,
                       "url": "media/panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_0_HS_1_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": -165.76,
                    "hfov": 28.49,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -2.93
                   }
                  ],
                  "items": [
                   {
                    "yaw": -165.76,
                    "hfov": 28.49,
                    "class": "HotspotPanoramaOverlayImage",
                    "roll": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 597,
                       "width": 558,
                       "url": "media/panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -2.93
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_F2310CDD_D677_8839_41C8_D0D913B7A67A",
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF, this.camera_DAE7A843_D1CC_7D14_41D8_B409CD2B000F); this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 74,
                       "width": 60,
                       "url": "media/panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 78.26,
                    "hfov": 6.35,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 0.32
                   }
                  ],
                  "items": [
                   {
                    "yaw": 78.26,
                    "hfov": 6.35,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 148,
                       "width": 121,
                       "url": "media/panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 0.32
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_t.jpg"
               }
              ],
              "hfovMax": 120,
              "partial": false,
              "id": "panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D",
              "thumbnailUrl": "media/panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_t.jpg",
              "pitch": 0,
              "label": "Front Desk",
              "hfov": 360,
              "class": "Panorama",
              "hfovMin": 80,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": "this.panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD",
                "yaw": -113,
                "class": "AdjacentPanorama",
                "backwardYaw": -17.73
               },
               {
                "distance": 1,
                "panorama": {
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3456,
                      "width": 6912,
                      "url": "media/panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_C8E827BA_D65C_987A_41C4_4A4CF3E1AB61",
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "rollOver": "this.playGlobalAudioWhilePlay(this.mainPlayList, 11, this.audio_C858DE90_D65B_8807_41E1_2470EA13FBD8)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 86,
                          "width": 91,
                          "url": "media/panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": -29.76,
                       "hfov": 9.45,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": 7.95
                      }
                     ],
                     "items": [
                      {
                       "yaw": -29.76,
                       "hfov": 9.45,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 172,
                          "width": 183,
                          "url": "media/panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": 7.95
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_C9052FC3_D655_8809_41D1_08A9A77B77C3",
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C95E270F_D654_9818_41E0_CBF0A3975840, this.camera_DAB17892_D1CC_7D35_41D1_570EA272E5D2); this.mainPlayList.set('selectedIndex', 12)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 200,
                          "width": 185,
                          "url": "media/panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_0_HS_1_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": 117.45,
                       "hfov": 48.71,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -6.9
                      }
                     ],
                     "items": [
                      {
                       "yaw": 117.45,
                       "hfov": 48.71,
                       "class": "HotspotPanoramaOverlayImage",
                       "roll": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1072,
                          "width": 996,
                          "url": "media/panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_0_HS_1_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -6.9
                      }
                     ]
                    },
                    {
                     "useHandCursor": true,
                     "id": "overlay_F09F5ACB_D674_881A_41D3_30A3AEF83C14",
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D, this.camera_DAC48880_D1CC_7D14_41BA_5F116FBF7F84); this.mainPlayList.set('selectedIndex', 10)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 107,
                          "width": 129,
                          "url": "media/panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_0_HS_3_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": 176.09,
                       "hfov": 11.34,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -32.85
                      }
                     ],
                     "items": [
                      {
                       "yaw": 176.09,
                       "hfov": 11.34,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 214,
                          "width": 259,
                          "url": "media/panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_0_HS_3_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -32.85
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_t.jpg"
                  }
                 ],
                 "hfovMax": 120,
                 "partial": false,
                 "id": "panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF",
                 "thumbnailUrl": "media/panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_t.jpg",
                 "pitch": 0,
                 "label": "Second floor",
                 "hfov": 360,
                 "class": "Panorama",
                 "hfovMin": 120,
                 "vfov": 180,
                 "adjacentPanoramas": [
                  {
                   "distance": 1,
                   "panorama": "this.panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D",
                   "yaw": 176.09,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 78.26
                  },
                  {
                   "distance": 1,
                   "panorama": {
                    "frames": [
                     {
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3456,
                         "width": 6912,
                         "url": "media/panorama_C95E270F_D654_9818_41E0_CBF0A3975840_hq.jpeg",
                         "class": "ImageResourceLevel"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "url": "media/panorama_C95E270F_D654_9818_41E0_CBF0A3975840.jpeg",
                         "class": "ImageResourceLevel"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "useHandCursor": true,
                        "id": "overlay_F2198991_D67B_8806_41D3_59F9860AF5E2",
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB, this.camera_DA496946_D1CC_7F1C_41E6_04E920BF06FE); this.mainPlayList.set('selectedIndex', 13)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 199,
                             "width": 87,
                             "url": "media/panorama_C95E270F_D654_9818_41E0_CBF0A3975840_0_HS_0_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "yaw": 16.12,
                          "hfov": 24.17,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": 1.32
                         }
                        ],
                        "items": [
                         {
                          "yaw": 16.12,
                          "hfov": 24.17,
                          "class": "HotspotPanoramaOverlayImage",
                          "roll": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 1079,
                             "width": 471,
                             "url": "media/panorama_C95E270F_D654_9818_41E0_CBF0A3975840_0_HS_0_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": 1.32
                         }
                        ]
                       },
                       {
                        "useHandCursor": true,
                        "id": "overlay_F355BD58_D67C_8806_41C1_B4FE881FF4DB",
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF, this.camera_DA445969_D1CC_7F14_41DC_35AEF43CEC94); this.mainPlayList.set('selectedIndex', 11)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 200,
                             "width": 108,
                             "url": "media/panorama_C95E270F_D654_9818_41E0_CBF0A3975840_0_HS_1_1_0_map.gif",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "yaw": 129.64,
                          "hfov": 22.95,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -0.66
                         }
                        ],
                        "items": [
                         {
                          "yaw": 129.64,
                          "hfov": 22.95,
                          "class": "HotspotPanoramaOverlayImage",
                          "roll": 0,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 821,
                             "width": 446,
                             "url": "media/panorama_C95E270F_D654_9818_41E0_CBF0A3975840_0_HS_1_0.png",
                             "class": "ImageResourceLevel"
                            }
                           ]
                          },
                          "pitch": -0.66
                         }
                        ]
                       }
                      ],
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_C95E270F_D654_9818_41E0_CBF0A3975840_t.jpg"
                     }
                    ],
                    "hfovMax": 120,
                    "partial": false,
                    "id": "panorama_C95E270F_D654_9818_41E0_CBF0A3975840",
                    "thumbnailUrl": "media/panorama_C95E270F_D654_9818_41E0_CBF0A3975840_t.jpg",
                    "pitch": 0,
                    "label": "Second floor 2",
                    "hfov": 360,
                    "class": "Panorama",
                    "hfovMin": 60,
                    "vfov": 180,
                    "adjacentPanoramas": [
                     {
                      "distance": 1,
                      "panorama": {
                       "frames": [
                        {
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3456,
                            "width": 6912,
                            "url": "media/panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_hq.jpeg",
                            "class": "ImageResourceLevel"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "url": "media/panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB.jpeg",
                            "class": "ImageResourceLevel"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "useHandCursor": true,
                           "id": "overlay_DACE27BD_D795_BF2D_41DD_AF54156037FF",
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_DA4FFE63_D793_B155_41E0_2D246377B945, this.camera_DB272798_D1CC_7334_41E5_7AFE03C95320); this.mainPlayList.set('selectedIndex', 14)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 64,
                                "width": 59,
                                "url": "media/panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_0_HS_0_0_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "yaw": -68.16,
                             "hfov": 6.21,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -3.26
                            }
                           ],
                           "items": [
                            {
                             "yaw": -68.16,
                             "hfov": 6.21,
                             "class": "HotspotPanoramaOverlayImage",
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 128,
                                "width": 119,
                                "url": "media/panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_0_HS_0_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": -3.26
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_DA39D160_D79D_D354_41B9_855BFE57E982",
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.mainPlayList.set('selectedIndex', 15)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 200,
                                "width": 95,
                                "url": "media/panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_0_HS_1_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "yaw": 6.64,
                             "hfov": 17.58,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 0.23
                            }
                           ],
                           "items": [
                            {
                             "yaw": 6.64,
                             "hfov": 17.58,
                             "class": "HotspotPanoramaOverlayImage",
                             "roll": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 712,
                                "width": 340,
                                "url": "media/panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_0_HS_1_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": 0.23
                            }
                           ]
                          },
                          {
                           "useHandCursor": true,
                           "id": "overlay_D91E3D95_D795_B3FD_41E6_6C1BD58FCD5B",
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_C95E270F_D654_9818_41E0_CBF0A3975840, this.camera_DB219784_D1CC_731C_41CF_82767035CCD2); this.mainPlayList.set('selectedIndex', 12)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 200,
                                "width": 122,
                                "url": "media/panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_0_HS_2_1_0_map.gif",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "yaw": 109.35,
                             "hfov": 113.3,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 7.27
                            }
                           ],
                           "items": [
                            {
                             "yaw": 109.35,
                             "hfov": 113.3,
                             "class": "HotspotPanoramaOverlayImage",
                             "roll": 0,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 2047,
                                "width": 1259,
                                "url": "media/panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_0_HS_2_0.png",
                                "class": "ImageResourceLevel"
                               }
                              ]
                             },
                             "pitch": 7.27
                            }
                           ]
                          }
                         ],
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_t.jpg"
                        }
                       ],
                       "hfovMax": 120,
                       "partial": false,
                       "id": "panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB",
                       "thumbnailUrl": "media/panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_t.jpg",
                       "pitch": 0,
                       "label": "Second Floor Lobby",
                       "hfov": 360,
                       "class": "Panorama",
                       "hfovMin": 60,
                       "vfov": 180,
                       "adjacentPanoramas": [
                        {
                         "distance": 1,
                         "panorama": "this.panorama_C95E270F_D654_9818_41E0_CBF0A3975840",
                         "yaw": 109.35,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 16.12
                        },
                        {
                         "distance": 1,
                         "panorama": {
                          "frames": [
                           {
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3456,
                               "width": 6912,
                               "url": "media/panorama_DA4FFE63_D793_B155_41E0_2D246377B945_hq.jpeg",
                               "class": "ImageResourceLevel"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "url": "media/panorama_DA4FFE63_D793_B155_41E0_2D246377B945.jpeg",
                               "class": "ImageResourceLevel"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "useHandCursor": true,
                              "id": "overlay_D96071FB_D794_F334_41D6_9749005A093C",
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB, this.camera_DB14B7D2_D1CC_7334_41E1_E83B922CE62D); this.mainPlayList.set('selectedIndex', 13)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 120,
                                   "width": 200,
                                   "url": "media/panorama_DA4FFE63_D793_B155_41E0_2D246377B945_0_HS_0_1_0_map.gif",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "yaw": 87.65,
                                "hfov": 88.74,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -5.02
                               }
                              ],
                              "items": [
                               {
                                "yaw": 87.65,
                                "hfov": 88.74,
                                "class": "HotspotPanoramaOverlayImage",
                                "roll": 0,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 1239,
                                   "width": 2048,
                                   "url": "media/panorama_DA4FFE63_D793_B155_41E0_2D246377B945_0_HS_0_0.png",
                                   "class": "ImageResourceLevel"
                                  }
                                 ]
                                },
                                "pitch": -5.02
                               }
                              ]
                             }
                            ],
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_DA4FFE63_D793_B155_41E0_2D246377B945_t.jpg"
                           }
                          ],
                          "hfovMax": 120,
                          "partial": false,
                          "id": "panorama_DA4FFE63_D793_B155_41E0_2D246377B945",
                          "thumbnailUrl": "media/panorama_DA4FFE63_D793_B155_41E0_2D246377B945_t.jpg",
                          "pitch": 0,
                          "label": "Second Floor Veranda",
                          "hfov": 360,
                          "class": "Panorama",
                          "hfovMin": 60,
                          "vfov": 180,
                          "adjacentPanoramas": [
                           {
                            "distance": 1,
                            "panorama": "this.panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB",
                            "yaw": 87.65,
                            "class": "AdjacentPanorama",
                            "backwardYaw": -68.16
                           }
                          ]
                         },
                         "yaw": -68.16,
                         "class": "AdjacentPanorama",
                         "backwardYaw": 87.65
                        }
                       ]
                      },
                      "yaw": 16.12,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 109.35
                     },
                     {
                      "distance": 1,
                      "panorama": "this.panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF",
                      "yaw": 129.64,
                      "class": "AdjacentPanorama",
                      "backwardYaw": 117.45
                     }
                    ]
                   },
                   "yaw": 117.45,
                   "class": "AdjacentPanorama",
                   "backwardYaw": 129.64
                  }
                 ]
                },
                "yaw": 78.26,
                "class": "AdjacentPanorama",
                "backwardYaw": 176.09
               }
              ]
             },
             "yaw": -17.73,
             "class": "AdjacentPanorama",
             "backwardYaw": -113
            },
            {
             "distance": 1,
             "panorama": {
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3456,
                   "width": 6912,
                   "url": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ]
                },
                "overlays": [
                 {
                  "useHandCursor": true,
                  "id": "overlay_C0E66438_D5B4_F806_41CD_760AF1D5E3F3",
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.showWindow(this.window_C082F79C_D5BB_983E_41A6_98A5CC1DD3E7, null, false)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 66,
                       "width": 68,
                       "url": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 53.23,
                    "hfov": 7.15,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": 0.05
                   }
                  ],
                  "items": [
                   {
                    "yaw": 53.23,
                    "hfov": 7.15,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 132,
                       "width": 137,
                       "url": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_0_HS_0_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": 0.05
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_C01B1436_D5BC_B80A_41D5_71C9F17F883A",
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD, this.camera_DB0387F7_D1CC_72FC_41C2_CC6A166DAF06); this.mainPlayList.set('selectedIndex', 4)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 70,
                       "width": 59,
                       "url": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": 104.05,
                    "hfov": 6.07,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -11.97
                   }
                  ],
                  "items": [
                   {
                    "yaw": 104.05,
                    "hfov": 6.07,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 141,
                       "width": 119,
                       "url": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_0_HS_1_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -11.97
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_C2C6EB1E_D5BB_883A_41EA_34940619A8A2",
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC, this.camera_DB0BC7E5_D1CC_731C_41E7_9B5C26771650); this.mainPlayList.set('selectedIndex', 6)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "width": 193,
                       "url": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_0_HS_2_1_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": -22.28,
                    "hfov": 65.73,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -1.03
                   }
                  ],
                  "items": [
                   {
                    "yaw": -22.28,
                    "hfov": 65.73,
                    "class": "HotspotPanoramaOverlayImage",
                    "roll": 0,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1471,
                       "width": 1421,
                       "url": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_0_HS_2_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -1.03
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "id": "overlay_C187FD26_D657_880B_41DC_9571AF35FDC1",
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 56,
                       "width": 56,
                       "url": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_0_HS_3_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "yaw": -126.38,
                    "hfov": 5.84,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -0.13
                   }
                  ],
                  "items": [
                   {
                    "yaw": -126.38,
                    "hfov": 5.84,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 112,
                       "width": 112,
                       "url": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_0_HS_3_0.png",
                       "class": "ImageResourceLevel"
                      }
                     ]
                    },
                    "pitch": -0.13
                   }
                  ]
                 }
                ],
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_t.jpg"
               }
              ],
              "hfovMax": 120,
              "partial": false,
              "id": "panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A",
              "thumbnailUrl": "media/panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_t.jpg",
              "pitch": 0,
              "label": "Lobby ",
              "hfov": 360,
              "class": "Panorama",
              "hfovMin": 60,
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "distance": 1,
                "panorama": {
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3456,
                      "width": 6912,
                      "url": "media/panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "useHandCursor": true,
                     "id": "overlay_C1A0BB8C_D65F_881E_41E6_EFD90E5F31AA",
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A, this.camera_DA6A8902_D1CC_7F14_41C1_C0BA05651766); this.mainPlayList.set('selectedIndex', 5)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 200,
                          "width": 136,
                          "url": "media/panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC_0_HS_0_1_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "yaw": -152.63,
                       "hfov": 54.12,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -2.28
                      }
                     ],
                     "items": [
                      {
                       "yaw": -152.63,
                       "hfov": 54.12,
                       "class": "HotspotPanoramaOverlayImage",
                       "roll": 0,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1651,
                          "width": 1124,
                          "url": "media/panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC_0_HS_0_0.png",
                          "class": "ImageResourceLevel"
                         }
                        ]
                       },
                       "pitch": -2.28
                      }
                     ]
                    }
                   ],
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC_t.jpg"
                  }
                 ],
                 "hfovMax": 120,
                 "partial": false,
                 "id": "panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC",
                 "thumbnailUrl": "media/panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC_t.jpg",
                 "pitch": 0,
                 "label": "First Floor Lobby",
                 "hfov": 360,
                 "class": "Panorama",
                 "hfovMin": 60,
                 "vfov": 180,
                 "adjacentPanoramas": [
                  {
                   "distance": 1,
                   "panorama": "this.panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A",
                   "yaw": -152.63,
                   "class": "AdjacentPanorama",
                   "backwardYaw": -22.28
                  }
                 ]
                },
                "yaw": -22.28,
                "class": "AdjacentPanorama",
                "backwardYaw": -152.63
               },
               {
                "distance": 1,
                "panorama": "this.panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD",
                "yaw": 104.05,
                "class": "AdjacentPanorama",
                "backwardYaw": 40.58
               }
              ]
             },
             "yaw": 40.58,
             "class": "AdjacentPanorama",
             "backwardYaw": 104.05
            },
            {
             "distance": 1,
             "panorama": "this.panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2",
             "yaw": -175.74,
             "class": "AdjacentPanorama",
             "backwardYaw": 3.22
            }
           ]
          },
          "yaw": 3.22,
          "class": "AdjacentPanorama",
          "backwardYaw": -175.74
         }
        ]
       },
       "yaw": 102.92,
       "class": "AdjacentPanorama",
       "backwardYaw": 88.62
      }
     ]
    },
    "yaw": -146.63,
    "class": "AdjacentPanorama",
    "backwardYaw": -14.33
   }
  ]
 },
 {
  "buttonPlayLeft": {
   "paddingRight": 0,
   "mode": "push",
   "width": 38,
   "height": 38,
   "paddingLeft": 0,
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "borderRadius": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "minHeight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomIn": {
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "paddingLeft": 0,
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "borderRadius": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "minHeight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonMoveLeft": {
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "paddingLeft": 0,
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_rollover.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
   "borderRadius": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5.png",
   "minHeight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_pressed.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "viewerArea": "this.MainViewer",
  "buttonRestart": {
   "paddingRight": 0,
   "mode": "push",
   "width": 38,
   "height": 38,
   "paddingLeft": 0,
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "borderRadius": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "minHeight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonMoveDown": {
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "paddingLeft": 0,
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_rollover.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2",
   "borderRadius": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2.png",
   "minHeight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_pressed.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "buttonZoomOut": {
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "paddingLeft": 0,
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "borderRadius": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "minHeight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "touchControlMode": "drag_rotation",
  "buttonPlayRight": {
   "paddingRight": 0,
   "mode": "push",
   "width": 38,
   "height": 38,
   "paddingLeft": 0,
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "borderRadius": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "minHeight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonMoveUp": {
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "paddingLeft": 0,
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_rollover.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
   "borderRadius": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB.png",
   "minHeight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_pressed.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "mouseControlMode": "drag_acceleration",
  "buttonMoveRight": {
   "paddingRight": 0,
   "mode": "push",
   "width": 30,
   "height": 30,
   "paddingLeft": 0,
   "minWidth": 0,
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "cursor": "hand",
   "paddingBottom": 0,
   "transparencyActive": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_rollover.png",
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894",
   "borderRadius": 0,
   "paddingTop": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894.png",
   "minHeight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_pressed.png",
   "backgroundOpacity": 0,
   "verticalAlign": "middle"
  },
  "displayPlaybackBar": true
 },
 {
  "automaticZoomSpeed": 3,
  "id": "panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF_camera",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "yaw": -146.17,
   "class": "PanoramaCameraPosition",
   "pitch": -3.62
  },
  "manualRotationSpeed": 1200
 },
 "this.panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4_camera",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": 127.21,
   "class": "PanoramaCameraPosition",
   "pitch": -12.15
  },
  "manualRotationSpeed": 1200
 },
 "this.panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924",
 {
  "automaticZoomSpeed": 3,
  "id": "panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924_camera",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "yaw": -23.41,
   "class": "PanoramaCameraPosition",
   "pitch": 0.4
  },
  "manualRotationSpeed": 1200
 },
 "this.panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2_camera",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 "this.panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_camera",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 "this.panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_camera",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 "this.panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC_camera",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 "this.panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF_camera",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 "this.panorama_C1F5E810_D67C_8806_41C4_09F04514A89A",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_C1F5E810_D67C_8806_41C4_09F04514A89A_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 81.38,
   "class": "PanoramaCameraPosition",
   "pitch": -2.65
  }
 },
 "this.panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -2.87,
   "class": "PanoramaCameraPosition",
   "pitch": -16.53
  }
 },
 "this.panorama_C95E270F_D654_9818_41E0_CBF0A3975840",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_C95E270F_D654_9818_41E0_CBF0A3975840_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 "this.panorama_DA4FFE63_D793_B155_41E0_2D246377B945",
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_DA4FFE63_D793_B155_41E0_2D246377B945_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3456,
       "width": 6912,
       "url": "media/panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "overlays": [
     {
      "useHandCursor": true,
      "id": "overlay_C9F6E460_D894_B154_41D0_B41ADE9C80F4",
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 198,
           "width": 200,
           "url": "media/panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705_0_HS_0_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 22.59,
        "hfov": 41.42,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.27
       }
      ],
      "items": [
       {
        "yaw": 22.59,
        "hfov": 41.42,
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 822,
           "width": 831,
           "url": "media/panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 3.27
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705_t.jpg"
   }
  ],
  "partial": false,
  "id": "panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705",
  "thumbnailUrl": "media/panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705_t.jpg",
  "pitch": 0,
  "label": "Second floor 3",
  "hfov": 360,
  "class": "Panorama",
  "hfovMin": 60,
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C1F5E810_D67C_8806_41C4_09F04514A89A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C1F5E810_D67C_8806_41C4_09F04514A89A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C95E270F_D654_9818_41E0_CBF0A3975840",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C95E270F_D654_9818_41E0_CBF0A3975840_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DA4FFE63_D793_B155_41E0_2D246377B945",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DA4FFE63_D793_B155_41E0_2D246377B945_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DFBB2C3F_D5B4_8879_41E4_E40D9F13C1BF_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D89C8CB8_D5BD_8806_41E1_32A6EE7955C4_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DB442514_D5B4_B80E_41E8_B0FF2A151924_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DACF0F9A_D5D7_883A_41D6_08CA28ACE6B2_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C6E2EF77_D5D5_880A_4186_EA8D9D8F15CD_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C12BADD2_D5CD_880A_41C2_315E89E91E5A_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C00C3C42_D5BD_880B_41E4_B8BDDBE851AC_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C1B35ADD_D64D_883E_41E3_BAF868EEBAEF_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C1F5E810_D67C_8806_41C4_09F04514A89A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C1F5E810_D67C_8806_41C4_09F04514A89A_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CFE7E018_D64D_B807_41E6_A6613AF50F56_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C96ACDD6_D7BF_880A_41C9_5B6C3213A98D_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_CAC1ED87_D65C_880A_41DB_A0E9002D0DFF_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C95E270F_D654_9818_41E0_CBF0A3975840",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_C95E270F_D654_9818_41E0_CBF0A3975840_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_F2B0606D_D67D_B81E_41DA_F82029E6DACB_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DA4FFE63_D793_B155_41E0_2D246377B945",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DA4FFE63_D793_B155_41E0_2D246377B945_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 15)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D9B4D893_D79D_51F5_41E3_FB3DECE8E705_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 15, 0)"
   }
  ]
 },
 {
  "id": "audio_C8A649FA_D64D_8BFA_41D5_3EB7FAF8AFE3",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_C8A649FA_D64D_8BFA_41D5_3EB7FAF8AFE3.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_C8A649FA_D64D_8BFA_41D5_3EB7FAF8AFE3.mp3"
  },
  "loop": true
 },
 {
  "titlePaddingTop": 5,
  "headerPaddingBottom": 10,
  "paddingRight": 0,
  "bodyBackgroundOpacity": 1,
  "backgroundColor": [],
  "modal": true,
  "paddingLeft": 0,
  "overflow": "scroll",
  "scrollBarMargin": 2,
  "gap": 10,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "headerPaddingRight": 10,
  "headerBorderColor": "#000000",
  "title": "Brief History",
  "horizontalAlign": "center",
  "bodyPaddingRight": 5,
  "backgroundColorRatios": [],
  "shadow": true,
  "shadowSpread": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "scrollBarWidth": 10,
  "bodyPaddingBottom": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "paddingBottom": 0,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titleFontColor": "#000000",
  "shadowVerticalLength": 0,
  "shadowOpacity": 0.5,
  "scrollBarColor": "#000000",
  "bodyBorderColor": "#000000",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonBackgroundColor": [],
  "shadowColor": "#000000",
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "paddingTop": 0,
  "minHeight": 20,
  "closeButtonPressedIconColor": "#FFFFFF",
  "showEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "titleFontWeight": "bold",
  "scrollBarOpacity": 0.5,
  "titleFontSize": 15,
  "titlePaddingRight": 5,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "backgroundOpacity": 1,
  "children": [
   {
    "paddingRight": 10,
    "height": "100%",
    "scrollBarMargin": 2,
    "paddingLeft": 10,
    "minWidth": 0,
    "width": "100%",
    "borderSize": 0,
    "class": "HTMLText",
    "shadow": false,
    "scrollBarWidth": 10,
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Bookman Old Style', serif;\"><I>Auravel Grande Hotel and Resort was started on September 8, 2012 and officially opened December 4, 2012. It os located at Brgy. San Francisco Calihaan San Pablo CIty. </I></SPAN></SPAN></DIV></div>",
    "id": "htmlText_uidDDE68723_D1CC_7314_41E9_B6207092349A",
    "borderRadius": 0,
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "minHeight": 0,
    "backgroundOpacity": 0
   }
  ],
  "bodyBorderSize": 0,
  "bodyPaddingTop": 5,
  "closeButtonRollOverIconColor": "#FFFFFF",
  "shadowHorizontalLength": 3,
  "minWidth": 20,
  "hideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "height": 250,
  "width": 200,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "headerVerticalAlign": "middle",
  "titleFontFamily": "Courier New",
  "titleTextDecoration": "none",
  "closeButtonBorderRadius": 11,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowBlurRadius": 6,
  "class": "Window",
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "borderSize": 0,
  "veilHideEffect": {
   "duration": 500,
   "class": "FadeOutEffect",
   "easing": "cubic_in_out"
  },
  "headerBackgroundColorDirection": "vertical",
  "footerHeight": 5,
  "veilColorRatios": [
   0,
   1
  ],
  "veilShowEffect": {
   "duration": 500,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "bodyPaddingLeft": 5,
  "closeButtonIconWidth": 12,
  "closeButtonIconHeight": 12,
  "bodyBackgroundColorDirection": "vertical",
  "headerBackgroundOpacity": 1,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "contentOpaque": false,
  "borderRadius": 5,
  "veilOpacity": 0.4,
  "id": "window_C082F79C_D5BB_983E_41A6_98A5CC1DD3E7",
  "closeButtonIconColor": "#000000",
  "veilColorDirection": "horizontal",
  "closeButtonIconLineWidth": 2,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "headerPaddingLeft": 10,
  "headerBorderSize": 0,
  "titlePaddingLeft": 5,
  "titleFontStyle": "normal",
  "headerPaddingTop": 10,
  "backgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "titlePaddingBottom": 5
 },
 {
  "id": "audio_C858DE90_D65B_8807_41E1_2470EA13FBD8",
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_C858DE90_D65B_8807_41E1_2470EA13FBD8.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_C858DE90_D65B_8807_41E1_2470EA13FBD8.mp3"
  },
  "loop": true
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DB219784_D1CC_731C_41CF_82767035CCD2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -163.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DB272798_D1CC_7334_41E5_7AFE03C95320",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -92.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DB1BF7AB_D1CC_7314_41DB_EF4BE6E09FBA",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 1.43,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "automaticZoomSpeed": 3,
  "id": "camera_DB1ED7BE_D1CC_736C_41B7_A03351BE9C10",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "yaw": 179.03,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DB14B7D2_D1CC_7334_41E1_E83B922CE62D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 111.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DB0BC7E5_D1CC_731C_41E7_9B5C26771650",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": 27.37,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DB0387F7_D1CC_72FC_41C2_CC6A166DAF06",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": -139.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "automaticZoomSpeed": 3,
  "id": "camera_DAFD480A_D1CC_7D14_41A0_EF426C38902C",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "yaw": 109.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DAF5081E_D1CC_7D2C_41D4_C0638A0A9595",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 26.12,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DAEF3831_D1CC_7D74_41DF_19D3EC9CCF6F",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": 162.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DAE7A843_D1CC_7D14_41D8_B409CD2B000F",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -3.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "automaticZoomSpeed": 3,
  "id": "camera_DAD10858_D1CC_7D34_41DC_A5F1BC924202",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "yaw": 35.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DACA686D_D1CC_7DEC_41BD_63DF45086249",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": 165.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DAC48880_D1CC_7D14_41BA_5F116FBF7F84",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -101.74,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DAB17892_D1CC_7D35_41D1_570EA272E5D2",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -50.36,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DAAA98A5_D1CC_7D1C_41E2_ABCD2F16B420",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DAA678B8_D1CC_7D74_41DF_9FF72FE9C517",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": -75.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DA9588C9_D1CC_7D17_417C_B78401904125",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": -176.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "automaticZoomSpeed": 3,
  "id": "camera_DA80D8DB_D1CC_7D34_41DE_E05DEFDB79D4",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "initialPosition": {
   "yaw": 33.37,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DA7C98EE_D1CC_7EEC_41DE_D54840645DF7",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": -91.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DA6A8902_D1CC_7F14_41C1_C0BA05651766",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": 157.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DA5BF925_D1CC_7F1C_41E1_FD517A200C90",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 161.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DA496946_D1CC_7F1C_41E6_04E920BF06FE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -70.65,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DA445969_D1CC_7F14_41DC_35AEF43CEC94",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": -62.55,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DA31A98A_D1CC_7F14_41D7_C2F1C4991C99",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 76.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DA2FD9AD_D1CC_7F6C_41E6_A9A6184DA468",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "yaw": 179.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DA1B99D4_D1CC_7F3C_41E9_A287A1482095",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": -77.08,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 },
 {
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ]
  },
  "id": "camera_DA09E9F7_D1CC_7EFC_41C6_EA60F2D78554",
  "class": "PanoramaCamera",
  "automaticRotationSpeed": 1,
  "automaticZoomSpeed": 3,
  "initialPosition": {
   "yaw": 4.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "manualRotationSpeed": 1200
 }
], "children": [
 {
  "paddingRight": 0,
  "paddingLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipFontColor": "#606060",
  "toolTipShadowColor": "#333333",
  "toolTipBorderColor": "#767676",
  "playbackBarHeadShadow": true,
  "playbackBarBorderRadius": 4,
  "progressBorderSize": 2,
  "toolTipShadowHorizontalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "shadow": false,
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingTop": 4,
  "toolTipBorderSize": 1,
  "paddingBottom": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontStyle": "normal",
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingTop": 0,
  "toolTipOpacity": 1,
  "progressBottom": 1,
  "playbackBarOpacity": 1,
  "playbackBarHeadHeight": 30,
  "minHeight": 50,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "toolTipBorderRadius": 3,
  "progressRight": 10,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBorderRadius": 4,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressOpacity": 1,
  "progressLeft": 10,
  "minWidth": 100,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBottom": 10,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowOpacity": 1,
  "progressBarBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressBorderRadius": 0,
  "playbackBarRight": 0,
  "toolTipFontWeight": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipPaddingRight": 6,
  "class": "ViewerArea",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBorderRadius": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "transitionMode": "blending",
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "progressHeight": 20,
  "top": 77,
  "playbackBarHeight": 20,
  "bottom": 92,
  "playbackBarBackgroundOpacity": 1,
  "id": "MainViewer",
  "playbackBarBorderSize": 2,
  "borderRadius": 0,
  "left": 0,
  "right": 0
 },
 {
  "backgroundOpacity": 0.2,
  "paddingRight": 20,
  "itemThumbnailOpacity": 1,
  "backgroundColor": [
   "#000000"
  ],
  "itemLabelTextDecoration": "none",
  "paddingLeft": 20,
  "playList": "this.thumbnaillist5245_playlist",
  "scrollBarMargin": 2,
  "minWidth": 0,
  "itemLabelHorizontalAlign": "center",
  "gap": 10,
  "itemLabelFontWeight": "normal",
  "itemBackgroundColorRatios": [],
  "itemThumbnailWidth": 100,
  "maxWidth": 800,
  "borderSize": 0,
  "itemPaddingRight": 3,
  "itemThumbnailHeight": 75,
  "backgroundColorRatios": [
   0
  ],
  "class": "ThumbnailList",
  "horizontalAlign": "left",
  "itemThumbnailShadowVerticalLength": 3,
  "scrollBarWidth": 10,
  "shadow": false,
  "itemBackgroundOpacity": 0,
  "itemThumbnailShadowHorizontalLength": 3,
  "top": 84,
  "bottom": 100,
  "paddingBottom": 10,
  "itemLabelFontColor": "#FFFFFF",
  "itemOpacity": 1,
  "layout": "vertical",
  "id": "thumbnaillist5245",
  "selectedItemLabelFontWeight": "bold",
  "borderRadius": 5,
  "itemThumbnailShadowOpacity": 0.8,
  "itemMode": "normal",
  "paddingTop": 10,
  "itemPaddingLeft": 3,
  "scrollBarColor": "#FFFFFF",
  "itemThumbnailShadow": true,
  "itemPaddingBottom": 3,
  "scrollBarVisible": "rollOver",
  "maxHeight": 800,
  "itemBorderRadius": 0,
  "itemLabelFontFamily": "Arial",
  "itemBackgroundColor": [],
  "minHeight": 0,
  "itemThumbnailShadowSpread": 1,
  "itemLabelFontStyle": "normal",
  "itemThumbnailScaleMode": "fit_outside",
  "itemLabelFontSize": 14,
  "itemBackgroundColorDirection": "vertical",
  "scrollBarOpacity": 0.5,
  "itemThumbnailShadowBlurRadius": 4,
  "itemPaddingTop": 3,
  "itemThumbnailBorderRadius": 5,
  "itemLabelGap": 5,
  "right": 9,
  "itemLabelPosition": "bottom",
  "itemVerticalAlign": "middle",
  "itemHorizontalAlign": "center",
  "verticalAlign": "top",
  "itemThumbnailShadowColor": "#000000",
  "backgroundColorDirection": "vertical"
 },
 {
  "paddingRight": 0,
  "fontSize": 40,
  "width": 292,
  "paddingLeft": 0,
  "height": 49,
  "minWidth": 30,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "text": "My Virtual Tour",
  "borderSize": 0,
  "class": "Label",
  "shadow": false,
  "horizontalAlign": "center",
  "top": 15,
  "fontWeight": "bold",
  "paddingBottom": 0,
  "fontColor": "#666666",
  "id": "label4056",
  "fontStyle": "normal",
  "borderRadius": 0,
  "paddingTop": 0,
  "minHeight": 16,
  "left": 11,
  "backgroundOpacity": 0,
  "verticalAlign": "middle"
 },
 {
  "paddingRight": 0,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "height": 92,
  "overflow": "scroll",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "gap": 6,
  "width": "100%",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "class": "Container",
  "shadow": false,
  "horizontalAlign": "center",
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "layout": "horizontal",
  "bottom": "0%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "minHeight": 1,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "children": [
   {
    "paddingRight": 0,
    "width": 468,
    "paddingLeft": 0,
    "height": "93.478%",
    "overflow": "hidden",
    "scrollBarMargin": 2,
    "minWidth": 468,
    "gap": 10,
    "borderSize": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "backgroundColorRatios": [
     0
    ],
    "class": "Container",
    "shadow": false,
    "horizontalAlign": "center",
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "layout": "horizontal",
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "borderRadius": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "contentOpaque": false,
    "minHeight": 20,
    "backgroundOpacity": 1,
    "children": [
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
     {
      "paddingRight": 0,
      "mode": "toggle",
      "width": 38,
      "height": 38,
      "paddingLeft": 0,
      "minWidth": 0,
      "borderSize": 0,
      "class": "IconButton",
      "shadow": false,
      "horizontalAlign": "center",
      "cursor": "hand",
      "paddingBottom": 0,
      "transparencyActive": false,
      "id": "IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
      "borderRadius": 0,
      "paddingTop": 0,
      "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C.png",
      "minHeight": 0,
      "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C_pressed.png",
      "backgroundOpacity": 0,
      "verticalAlign": "middle"
     },
     {
      "paddingRight": 0,
      "width": 133,
      "paddingLeft": 0,
      "height": "100%",
      "overflow": "hidden",
      "scrollBarMargin": 2,
      "minWidth": 20,
      "gap": 5,
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0
      ],
      "class": "Container",
      "shadow": false,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "borderRadius": 0,
      "paddingTop": 0,
      "scrollBarColor": "#000000",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "minHeight": 20,
      "backgroundOpacity": 1,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
       {
        "paddingRight": 0,
        "width": 47,
        "paddingLeft": 0,
        "height": "100%",
        "overflow": "hidden",
        "scrollBarMargin": 2,
        "minWidth": 20,
        "gap": 10,
        "borderSize": 0,
        "backgroundColor": [
         "#FFFFFF"
        ],
        "backgroundColorRatios": [
         0
        ],
        "class": "Container",
        "shadow": false,
        "horizontalAlign": "center",
        "scrollBarWidth": 10,
        "paddingBottom": 0,
        "layout": "vertical",
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "borderRadius": 0,
        "paddingTop": 0,
        "scrollBarColor": "#000000",
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5,
        "contentOpaque": false,
        "minHeight": 20,
        "backgroundOpacity": 1,
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"
        ],
        "verticalAlign": "middle",
        "backgroundColorDirection": "vertical"
       },
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"
      ],
      "verticalAlign": "middle",
      "backgroundColorDirection": "vertical"
     },
     {
      "paddingRight": 0,
      "width": 85,
      "paddingLeft": 0,
      "height": "100%",
      "overflow": "hidden",
      "scrollBarMargin": 2,
      "minWidth": 20,
      "gap": 10,
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorRatios": [
       0
      ],
      "class": "Container",
      "shadow": false,
      "horizontalAlign": "center",
      "scrollBarWidth": 10,
      "paddingBottom": 0,
      "layout": "horizontal",
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "borderRadius": 0,
      "paddingTop": 0,
      "scrollBarColor": "#000000",
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "contentOpaque": false,
      "minHeight": 20,
      "backgroundOpacity": 1,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "verticalAlign": "middle",
      "backgroundColorDirection": "vertical"
     }
    ],
    "verticalAlign": "middle",
    "backgroundColorDirection": "vertical"
   }
  ],
  "verticalAlign": "middle",
  "backgroundColorDirection": "vertical"
 }
], 
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "100%",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "gap": 10,
 "width": "100%",
 "borderSize": 0,
 "class": "Player",
 "shadow": false,
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.5,
 "scripts": {
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } }
 },
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "borderRadius": 0,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "minHeight": 20,
 "verticalAlign": "top"
})