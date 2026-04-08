const colorsData = [
  {
    brand: "Grandex",
    collections: [
      {
        name: "Pure Color",
        items: [
          "P-427-Green-Lime.webp", "P-199-Pure-Orange.webp", "P-198-Mango.webp",
          "P-197-Deep-Sea.webp", "P-107-Pure-Red.webp", "P-103-Pure-Translucent.webp",
          "P-101-Pure-Vanilla.webp", "P-102-Pure-Beige.webp", "P-104-Pure-White.webp",
          "P-105-Pure-Black.webp", "P-108-Pure-Gray.webp", "P-109-Light-Grey.webp",
          "P-110-Iron.webp", "P118-Natural-White.webp", "P119-Whale-White.webp"
        ]
      },
      {
        name: "Sand and Sky",
        items: [
          "S-201-Dirty-Sand.webp", "S-202-Peaceful-Night.webp", "S-203-Sparkling-Sand.webp",
          "S-204-Creamy-Sand.webp", "S-205-Fair-Sky.webp", "S-206-Wet-Sand.webp",
          "S-207-Clear-Sky.webp", "S-208-Natural-Sand.webp", "S-209-Light-Sand.webp",
          "S-210-Hot-Sand.webp", "S-211-Romantic-Night.webp", "S-212-Thunder-Sky.webp",
          "S-214-Sanded-Brown.webp", "S-215-Sanded-Alps.webp", "S-217-Midnight-Sky.webp",
          "S-218-Crispy-Beige.webp", "S-220-Crystal-snowflake.webp", "S-223-Silver-Pearl.webp",
          "S-229-Tempest-Grey.webp"
        ]
      }, 
      {
        name: "Delicious Edition",
        items: [
          "D-301-Poppy-Seed.webp", "D-302-Morning-Coffee.webp", "D-303-Raisined-Chocolate.webp",
          "D-304-Ice-Cream.webp", "D-305-Melted-Butter.webp", "D-307-Aspen-Pie.webp",
          "D-308-Cubic-Mint.webp", "D-309-Mushroom-Soup.webp", "D-310-Herbal-Ash.webp",
          "D-312-Pietra-Absorb.webp", "D-313-Milky-Way.webp", "D-314-Arctic-Ice.webp",
          "D-315-Spacemen-Food.webp", "D-318-Velvet-Bean.webp", "D-320-Soil.webp"
        ]
      },
      {
        name: "Adventure",
        items: [
          "A-401-Cloudy-Mount.webp", "A-403-Asphalt-Material.webp", "A-405-Peach-Fruit.webp",
          "A-406-Space-Galaxy.webp", "A-409-South-Coast.webp", "A-410-Cotton-Wool.webp",
          "A-411-Precious-Stone.webp", "A-412-Citron-Blossom.webp", "A-414-Historical-Spot.webp",
          "A-415-Endless-Desert.webp", "A-416-Visible-Horizon.webp", "A-417-Global-Cruise.webp",
          "A-418-Oak-Wood.webp", "A-419-Cromium-Atom.webp", "A-421-Coal-Mine.webp",
          "A-422-Snow-Pile.webp", "A-423-Industrial-Draft.webp", "A-424-Loft-Design.webp",
          "A-425-Urban-Project.webp", "A-426-Onyx.webp", "A-427-Primo.webp",
          "A-429-Conrete-Quartz.webp", "A-495-Milkshake.webp"
        ]
      },
      {
        name: "Explorer",
        items: [
          "E-603-Snowy-Moscow.webp", "E-605-Indian-Mantra.webp", "E-609-Business-Tokio.webp",
          "E-613-English-Tea.webp", "E-618-Saturn-Ring.webp"
        ]
      },
      {
        name: "Jewel",
        items: [
          "J-504-Cut-Diamond.webp", "J-505-Pearl-Necklace.webp", "J-509-American-Obsidian.webp",
          "J-510-Terazzo-Bianco.webp"
        ]
      },
      {
        name: "Marble Ocean",
        items: [
          "M-605-Notte-Bianca.webp", "M-606-Grigio-Bianca.webp", "M-607-Neve-Bianca.webp",
          "M-610-Amiata-Bianca.webp", "M-701-A-Hazel-Flow.webp", "M-703-A-Water-Weed.webp",
          "M-705-A-Lake-Coast.webp", "M-706-A-Stormy-Sea.webp", "M-707-A-Noble-Pearl.webp",
          "M-708-A-Deep-Water.webp", "M-710-A-Float-Rock.webp", "M-711-A-Sparkling-Wave.webp",
          "M-712-A-Stylish-Moon.webp", "M-713-A-Whitesand-Beach.webp", "M-717-A-Shrimp-Crust.webp",
          "M-718-A-Neptun-Trident.webp", "M-720-Carrara-Lunar.webp", "M-727-Venice-A.webp",
          "M-731-Moon-Coast.webp", "M-732-Marble-Mirage.webp", "M-733-Stellar-Depth.webp",
          "M-798-Black-Pearl.webp", "М-724-Cloud-Concrete.webp", "М-726-Ethen-Mist.webp",
          "М-728-Obsidian-Soil.webp"
        ]
      },
      {
        name: "Crevice",
        items: ["C-801-Arezzo.webp", "C-802-Piacenza.webp"]
      }
    ]
  },
  {
    brand: "Hanex",
    collections: [
      {
        name: "Solo",
        items: [
          "Hanex-S-004-IVORY.webp", "Hanex-S-006-GREY.webp", "Hanex-S-008-N-WHITE.webp",
          "Hanex-S-022-STEEL.webp", "Hanex-S-108-EMPIRE.webp", "Hanex-M-007-BLACK.webp",
          "Hanex-M-009-CHARCOAL-SKETCH.webp"
        ]
      },
      {
        name: "Duo",
        items: [
          "Hanex-D-001-SILVERSTONE.webp", "Hanex-D-003-GOLDBROWN.webp", "Hanex-D-007-MIST.webp",
          "Hanex-D-012-LIGHTBROWN.webp", "Hanex-D-013-NIGHT-LIGHT.webp", "Hanex-D-024-SILVERWHITE.webp",
          "Hanex-D-025-LIGHTSAND.webp", "Hanex-D-027-MARRONNIER.webp", "Hanex-D-028-BLACKBEAT.webp",
          "Hanex-D-039-NAVAJO.webp", "Hanex-D-047-CREAM-CHEESE.webp", "Hanex-D-048-CRYSTAL-MIRROR.webp",
          "Hanex-D-101-NANTUCKET.webp", "Hanex-D-102-SEASHORE.webp", "Hanex-D-104-GRAVITY.webp",
          "Hanex-D-211-MILK-FROTH.webp", "Hanex-D-212-SUMMER-SANDS.webp", "Hanex-D-213-STONEFALL.webp",
          "Hanex-D-214-DIJON-MUSTARD.webp", "Hanex-D-215-BLACK-HAZE.webp", "Hanex-D-216-CORNMEAL.webp",
          "Hanex-D-217-CRISP-SNOW.webp", "Hanex-D-218-DESIRE.webp", "Hanex-P-002-METALGREY.webp",
          "Hanex-P-004-SOLARIS.webp", "Hanex-P-005-NIGHT-GLEAM.webp", "Hanex-P-007-BROWN-EYES.webp",
          "Hanex-C-007-CUBIC-MILK.webp", "Hanex-T-021-PUREARCTIC.webp", "Hanex-T-025-CHESTNUT.webp",
          "Hanex-T-050-ICEQUEEN.webp", "Hanex-T-223-L-CUBIC.webp", "Hanex-T-235-THETIS.webp",
          "Hanex-T-510-HARAMIS.webp", "Hanex-T-511-ARIA.webp"
        ]
      },
      {
        name: "Trio",
        items: [
          "Hanex-T-071-ORGANIC-COTTON.webp", "Hanex-T-089-VOCALISE.webp", "Hanex-T-102-HIDDEN-GLEN.webp",
          "Hanex-T-105-QUARTZ-GREY.webp", "Hanex-T-206-CHARLES-ROSE.webp", "Hanex-T-210-REBECA.webp",
          "Hanex-T-212-UNICON.webp", "Hanex-T-218-L-BEAUTY.webp", "Hanex-T-219-L-BLANC.webp",
          "Hanex-T-222-L-MOCHA.webp", "Hanex-T-233-CHARITES.webp", "Hanex-T-234-BRUTUS.webp",
          "Hanex-T-237-ICE-CUBE.webp", "Hanex-T-239-STONE-GREY.webp", "Hanex-T-240-DARK-KNIGHT.webp",
          "Hanex-T-243-BROWN-COOKIE.webp", "Hanex-T-411-ICE-PILE.webp", "Hanex-T-412-SERENITY.webp",
          "Hanex-T-507-H-SAND.webp", "Hanex-T-509-HARVEST.webp"
        ]
      },
      {
        name: "Concrete",
        items: ["Hanex-CT-002-MODERN-CONCRETE.webp", "Hanex-CT-003-SMOKY-CONCRETE.webp"]
      },
      {
        name: "Galleria",
        items: [
          "Hanex-GAD-003-OMEGA.webp", "Hanex-GAD-007-JUNO.webp", "Hanex-GAD-020-GAIA.webp",
          "Hanex-GAM-001-AFTER-SNOW.webp", "Hanex-GAM-004-SANDFLOWER.webp"
        ]
      },
      {
        name: "Cascade",
        items: [
          "Hanex-CC-002-CASCADE-CREAM.webp", "Hanex-CC-004-CASCADE-BEIGE.webp", "Hanex-CC-006-CASCADE-BLACK-1.webp",
          "Hanex-CC-007-CASCADE-CLOUD-scaled.webp", "Hanex-CC-008-CASCADE-WAVE-scaled.webp",
          "Hanex-CC-009-CASCADE-HAZE-scaled.webp", "Hanex-CC-010-CASCADE-PURE-GREY-scaled.webp"
        ]
      },
      {
        name: "Stratum",
        items: [
          "Hanex-ST-101-CLARA.webp", "Hanex-ST-102-MARELINHO.webp", "Hanex-ST-103-NUBLADO.webp",
          "Hanex-ST-105-MORENO.webp", "Hanex-ST-201-ROMANO.webp", "Hanex-ST-204-MARRON.webp",
          "Hanex-ST-205-CARAMEL-DRIZZLE.webp", "Hanex-ST-302-BIANCO-CLASSICO.webp", "Hanex-ST-303-VOLARE.webp"
        ]
      },
      {
        name: "Bellasimo",
        items: [
          "Hanex-BL-201-KASHMERE.webp", "HAnex-BL-206-SLATE-GREY.webp", "Hanex-BL-256-MOUNTAIN-FROST.webp",
          "HANEX-BL-302-LINEN-WHITE-scaled.webp"
        ]
      },
      {
        name: "Venato",
        items: [
          "Hanex-VM-001-VENATO-MARBLE-SPARKLE.webp", "Hanex-VM-002-VENATO-MARBLE-SNOW.webp",
          "Hanex-VM-003-VENATO-BLANC.webp", "Hanex-CS-501-CALACATTA-GLORY-scaled.webp",
          "HANEX-CS-502-BLACK-DESERT-scaled.webp"
        ]
      }
    ]
  },
  {
    brand: "Staron",
    collections: [
      {
        name: "Project",
        items: ["SQ019-Quasar-White.webp", "BW010-Bright-White.webp"]
      },
      {
        name: "Solid",
        items: [
          "ON095-Onyx.webp", "SC052-California-Poppy-1.webp", "SP011-Pearl.webp",
          "SD001-Dazzling-White.webp", "SF020-Fog-1.webp", "SB022-Bliss.webp",
          "SI040-Ivory.webp", "ST023-Steel.webp", "SV041-Natural-1.webp"
        ]
      },
      {
        name: "Sanded",
        items: [
          "DN421-Dark-Nebula.webp", "SB412-Birch.webp", "SC433-Cornmeal.webp",
          "SC457-Chestnut.webp", "SG420-Grey.webp", "SG428-Goose.webp",
          "SG441-Gold-Dust.webp", "SI414-Icicle.webp", "SM421-Cream.webp",
          "SM453-Mocha.webp", "SO423-Onyx.webp", "SO446-Oatmeal.webp",
          "SS418-Stratus.webp", "SS440-Sahara.webp", "ST482-Tundra.webp",
          "SV430-Vermillion.webp", "WP410-White-Pepper.webp"
        ]
      },
      {
        name: "Aspen",
        items: [
          "AB632-Brown.webp", "AG612-Glacier.webp", "AM633-Mine.webp",
          "AM681-Misto.webp", "AP640-Pepper.webp", "AS610-Snow.webp",
          "AS642-Seashell.webp"
        ]
      },
      {
        name: "Pebble",
        items: [
          "PA860-Aqua.webp", "PB870-Blue.webp", "PE814-Ebony.webp",
          "PG810-Grey.webp", "PG840-Gold.webp", "PI811-Ice.webp",
          "PK843-Kernel.webp", "PP868-Ponderosa.webp", "PS813-Swan.webp",
          "PS820-Saratoga.webp", "PT857-Terrain.webp"
        ]
      },
      {
        name: "Metallic",
        items: ["EG595-Galaxy.webp", "EY510-Yukon.webp", "ES582-Sleeksilver.webp"]
      },
      {
        name: "Quarry",
        items: ["QS288-Starred.webp", "TO310-Oyster.webp"]
      },
      {
        name: "Tempest",
        items: [
          "FC158-Coffee-Bean.webp", "FC188-Caviar.webp", "FG196-Gold-Leaf.webp",
          "FH114-Horizon.webp", "FI187-Igneous.webp", "FM111-Meteor.webp",
          "FP100-Peak.webp", "FR124-Rattan.webp", "FR148-Radiance-Shimmer.webp",
          "FS115-Shell.webp", "FZ184-Zenith.webp"
        ]
      },
      {
        name: "Mosaic",
        items: ["QD212-Dalmatian.webp", "QN287-Nimbus.webp"]
      },
      {
        name: "Supreme",
        items: [
          "VL322-Legato.webp", "VL312-Largo.webp", "VG392-Gravita.webp",
          "VA311-Arctic-White.webp", "VB172-Beige-Granite.webp", "VC110-Cotton-White.webp",
          "VC118-Cloudbank.webp", "VC157-Concerto.webp", "VD126-Dawn.webp",
          "VD173-Desert-Wind.webp", "VD175-Dandelion.webp", "VL155-Loam.webp",
          "VL343-Latte-Cream.webp", "VM143-Magnolia.webp", "VN144-Natural-Bridge.webp",
          "VN180-Noir-Concrete.webp", "VO171-Ocean-View.webp", "VO173-Odyssey.webp",
          "VR173-Rainier.webp", "VR322-Rotor-Cloud.webp", "VT115-Tranquil.webp",
          "VU127-Urban-Grey.webp"
        ]
      }
    ]
  },
  {
    brand: "Durasein",
    collections: [
      {
        name: "Коллекция однотонных декоров",
        items: [
          "DM1005-Glacier-White.webp", "DM1006-Glacier-Ice.webp", "DM1008-Suede-Grey.webp",
          "DM1009-Steel-Grey.webp", "DM1011-Grey-Quartz.webp", "DM1016-Concrete-Gray.webp",
          "DM1020-Rugged.webp", "DM1023-Blue-Mist.webp", "DM1024-Light-Taupe.webp",
          "DM6006-Nocturne.webp"
        ]
      },
      {
        name: "Коллекция песков и вкраплений",
        items: [
          "DM2002-Sanded-Beige.webp", "DM2005-Chez-Linen.webp", "DM2007-Clarity.webp",
          "DM2009-Lodestar.webp", "DM2013-Sandalwood.webp", "DM2015-Duostone.webp",
          "DM2017-Duomist.webp", "DM2018-Crystal-Beige.webp", "DM2501-Glitter-Black.webp",
          "DM2507-Celestial-Black.webp", "DM3005-Limestone.webp", "DM3015-Iceberg.webp",
          "DM3016-Bellingham-Grey.webp", "DM3018-Concrete.webp", "DM3019-Bean.webp",
          "DM3020-Clay.webp", "DM3023-Winter-Woods.webp", "DM3024-Pepper-Mill.webp",
          "DM3029-Colorado.webp", "DM3030-Starry-Night.webp", "DM3040-Pebble-Pearl.webp",
          "DM3041-Rockaway.webp", "DM3046-Arctic-Frost.webp", "DM3501-Dove.webp"
        ]
      },
      {
        name: "Коллекция чип и вкрапления",
        items: [
          "DM4002-Gadthena.webp", "DM4003-Briosinki.webp", "DM4005-Alpha.webp",
          "DM7003-Brisk.webp"
        ]
      },
      {
        name: "Коллекция мраморная с разводами и жилами",
        items: [
          "DM5010-Victoria-Falls.webp", "DM5012-Serenity.webp", "DM5013-Naturally.webp",
          "DM5014-Luna.webp", "DM5015-Eventide.webp", "DM5018-Bianca-Sabbia.webp",
          "DM5031-Hickory.webp", "DM5042-Light-Haze.webp", "DM5047-Fire-Cloud.webp",
          "DM5053-Sahara-Dune.webp", "DM5058-Blanca-Carrera.webp", "DM5069-Ember.webp",
          "DM5071-Black-Olive.webp", "DM5077-Prophecy.webp"
        ]
      }
    ]
  },
  {
    brand: "Neomarm",
    collections: [
      {
        name: "N",
        items: [
          "N-010-White.webp", "N-101-Crystal-Beige.webp", "N-103-Gray-Onix.webp",
          "N-159-Sanded-Grizzle.webp", "N-218-Clay.webp", "N-420-Sanded-Grey.webp",
          "N-421-Sanded-Cream.webp", "N-423-Sanded-Night.webp", "N-430-Sanded-Dust.webp",
          "N-440-Sahara.webp", "N-510-Mettalic-White.webp", "N-539-Earl-Grey.webp",
          "N-610-Milk-Snow.webp", "N-612-White-Glacier.webp", "N-642-Aspen-Seashell.webp",
          "N-810-Cobble-Grey.webp", "N-811-Cobble-Ice.webp", "N-820-Cobble-Quartz.webp",
          "N-840-Cobble-Gold.webp", "N-857-Cobble-Brown.webp"
        ]
      },
      {
        name: "NM1",
        items: [
          "NM-101-Snow-Queen.webp", "NM-102-Desert-blow.webp", "NM-104-Pearl-drop.webp",
          "NM-108-Petro-bloom.webp", "NM-109-Magic-dust.webp", "NM-110-Foggy-shell.webp",
          "NM-111-Flower-cloud.webp", "NM-115-Gold-Beach.webp", "NM-119-Volcanic-Ice.webp"
        ]
      },
      {
        name: "NM2",
        items: [
          "NM-201-Calacatta-Bianco.webp", "NM-206-Calacatta-Kassel.webp", "NM-207-Statuario-Lille.webp",
          "NM-208-Calacatta-Blanca.webp", "NM-209-Calacatta-Vero.webp", "NM-210-Marmo-Lunar.webp",
          "NM-220-White-Mist.webp", "NM-221-Optical-Haze.webp", "NM-222-Olympos-Mist.webp"
        ]
      }
    ]
  },
  {
    brand: "Pluton",
    collections: [
      {
        name: "Solo",
        items: [
          "M-007-Black.webp", "S-019-Brown-Fever.webp", "S-001-R-White.webp",
          "S-004-Ivory.webp", "S-008-N-White.webp"
        ]
      },
      {
        name: "Duo",
        items: [
          "D-001-Silverstone.webp", "D-003-Goldbrown.webp", "D-009-Sandbank.webp",
          "D-039-Navajo.webp", "D-027-Marrionier.webp", "D-007-Mist.webp",
          "D-012-Lightbrown.webp", "D-024-Silverwhite.webp", "D-025-Lightsand.webp",
          "D-028-Blackbeat.webp", "D-101-Nantucket.webp", "D-102-Seashore.webp",
          "D-119-Sand-Salt.webp", "D-121-Sand-Lily.webp"
        ]
      },
      {
        name: "Pearl",
        items: [
          "P-004-Solaris.webp", "P-005-Nightgleam.webp", "P-007-Brown-Eyes.webp"
        ]
      },
      {
        name: "Cubic",
        items: ["C-001Cubic-White.webp"]
      },
      {
        name: "Trio",
        items: [
          "T-012-H-Elegance.webp", "T-021-Pure-Arctic.webp", "T-050-Ice-Queen.webp",
          "T-068-Rice-Cookie.webp", "T-098-Coldstone.webp", "T-109-Sun-Coffee.webp",
          "T-110-Moon-Galaxy.webp", "T-119-Sun-Onyx.webp", "T-206-Charles-Rose.webp"
        ]
      }
    ]
  }
];