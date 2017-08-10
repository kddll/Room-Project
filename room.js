if (BABYLON.Engine.isSupported()) {

    //Initialize canvas element
    var canvas = document.getElementById("renderCanvas");
    //Initialize game engine
    var engine = new BABYLON.Engine(canvas, true);
    //Initialize the scene
    var scene = new BABYLON.Scene(engine);

    //Scene Loader
    BABYLON.SceneLoader.Load("data/", "room.babylon", engine, function (scene) {
        // Wait for textures and shaders to be ready
        scene.executeWhenReady(function () {

          //Camera
          var freeCamera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(-7, 4, -6), scene);
          //Attach camera to canvas inputs
          scene.activeCamera = freeCamera;
          freeCamera.attachControl(canvas);
          freeCamera.rotation.y = 1.4;

          // Environment Texture
          var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("skybox/sunset.dds", scene);
          scene.imageProcessingConfiguration.exposure = 1.7;
          scene.imageProcessingConfiguration.contrast = 1.6;
          scene.imageProcessingConfiguration.toneMappingEnabled = true;

          // Skybox
          var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);
          var hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
          hdrSkyboxMaterial.backFaceCulling = false;
          hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
          hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
          hdrSkyboxMaterial.microSurface = 1.0;
          hdrSkyboxMaterial.disableLighting = false;
          hdrSkybox.material = hdrSkyboxMaterial;
          hdrSkybox.infiniteDistance = true;
          hdrSkybox.rotation.y = 3.4;
          hdrTexture.gammaSpace = false;

          //Objects in scene

            //Room meshes
            var floor = scene.getMeshByID("Floor");
            var ceiling = scene.getMeshByID("Ceiling");
            var walls = scene.getMeshByID("Walls");
            var featureWall = scene.getMeshByID("featureWall");

            //Bed meshes
            var bedCover = scene.getMeshByID("luxury_bed_cover");
            var luxuryBedCushionMain = scene.getMeshByID("luxury_bed_cushion")
            var luxuryBedCushion = scene.getMeshByID("luxury_bed_cushion.001");
            var luxuryBedCushion2 = scene.getMeshByID("luxury_bed_cushion.002");
            var luxuryBedCushion3 = scene.getMeshByID("luxury_bed_cushion.003");
            var luxuryBedCushion4 = scene.getMeshByID("luxury_bed_cushion.004");
            var luxuryBedCushionDetail = scene.getMeshByID("luxury_bed_cushion.004_detail");
            var luxuryBedCushionDetail1 = scene.getMeshByID("luxury_bed_cushion.004_detail1");
            var luxuryBedCushionDetail2 = scene.getMeshByID("luxury_bed_cushion.004_detail2");
            var bedFootBoard = scene.getMeshByID("luxury_bed_footboard");
            var bedHeadBoard = scene.getMeshByID("luxury_bed_headboard");
            var headBoardTop = scene.getMeshByID("luxury_bed_headboardtop");
            var headBoardTop1 = scene.getMeshByID("luxury_bed_headboardtop1");

            //Windows meshes
            var windowFrame = scene.getMeshByID("windowFrame");
            var windowGlass = scene.getMeshByID("windowGlass");

            //TV meshes
            var wideScreenTV = scene.getMeshByID("Widescreen TV");
            var wideScreenGlass = scene.getMeshByID("wideScreenGlass");
            var tvCabinet = scene.getMeshByID("modern_tvcabinet");

            //Nightstand meshes
            var nightStandBottom = scene.getMeshByID("Nightstand bottom");
            var nightStandDrawer = scene.getMeshByID("Nightstand.drawer");
            var nightStandDrawerStop = scene.getMeshByID("Nightstand.drawerstop");
            var nightStandKnob = scene.getMeshByID("Nightstand.knob");
            var nightStandBottomDrawer = scene.getMeshByID("Nightstand bottom drawer");
            var nightStandLeft = scene.getMeshByID("Nightstand left side");
            var nightStandRight01 = scene.getMeshByID("Nightstand right.001");
            var nightStandRight = scene.getMeshByID("Nightstand right");
            var nightStandTop = scene.getMeshByID("Nightstand top");

            //Door meshes

              //Front Door
              var frontDoorFrame = scene.getMeshByID("DoorFrame");
              var frontDoor = scene.getMeshByID("Door");
              var frontDoorHandleFront = scene.getMeshByID("Handle_Front");
              var frontDoorHandleBack = scene.getMeshByID("Handle_Back");

              //Bathroom Door
              var backDoorFrame = scene.getMeshByID("DoorFrame.001");
              var backDoor = scene.getMeshByID("Door.001");
              var backDoorHandleFront = scene.getMeshByID("Handle_Front.001");
              var backfrontDoorHandleBack = scene.getMeshByID("Handle_Back.001");

            //Lamp meshes
            var lampBase = scene.getMeshByID("lampBase");
            var lampNeck = scene.getMeshByID("lamp.neck");
            var lampBody = scene.getMeshByID("lamp.body");
            var lampShade = scene.getMeshByID("lamp.shade");
            var lampTop = scene.getMeshByID("lamp.top");


          //Materials and textures

            //Room Elements
              //Floor
              var floorCarpet = new BABYLON.PBRMetallicRoughnessMaterial("floorCarpet", scene);
              floorCarpet.baseTexture = new BABYLON.Texture("textures/floor/carpet_texture.jpg", scene);
              floorCarpet.metallic = 0.0;
              floorCarpet.roughness = 1.0;
              floorCarpet.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("skybox/sunset.dds", scene);
              floor.material = floorCarpet;

              //Ceiling
              var ceilingMat = new BABYLON.PBRMaterial("Ceiling", scene);
              ceilingMat.reflectionTexture = hdrTexture;
              ceilingMat.albedoColor = new BABYLON.Color3(1.0, 1.0, 1.0);
              ceilingMat.cameraExposure = 1.66;
              ceilingMat.cameraContrast = 1.96;
              ceilingMat.roughness = 0.8;
              ceiling.material = ceilingMat;

              //Walls
              var wallMat = new BABYLON.PBRMaterial("Walls", scene);
              wallMat.reflectionTexture = hdrTexture;
              wallMat.albedoColor = new BABYLON.Color3(1.0, 1.0, 1.0);
              wallMat.cameraExposure = 1.66;
              wallMat.cameraContrast = 1.96;
              wallMat.roughness = 0.8;
              walls.material = wallMat;

              //Feature Wall
              var featureMat = new BABYLON.PBRMaterial("featureWall", scene);
              featureMat.reflectionTexture = hdrTexture;
              featureMat.albedoTexture = new BABYLON.Texture("textures/feature_wall/feature.png", scene);
              featureMat.bumpTexture = new BABYLON.Texture("textures/feature_wall/feature_normal.png", scene);
              featureMat.bumpTexture.level = .01;
              featureMat.reflectivityTexture = new BABYLON.Texture("textures/feature_wall/feature_h.png", scene);
              featureMat.useMicroSurfaceFromReflectivityMapAlpha = false;
              featureMat.cameraExposure = 1.66;
              featureMat.cameraContrast = 1.96;
              featureMat.roughness = 0.57;
              featureWall.material = featureMat;
          //Window Materials
              //Window Frame

              //Window Glass
              var glassMat = new BABYLON.PBRMaterial("windowGlass", scene);
              glassMat.reflectionTexture = hdrTexture;
              glassMat.refractionTexture = hdrTexture;
              glassMat.linkRefractionWithTransparency = false;
              glassMat.indexOfRefraction = 0.52;
              glassMat.alpha = 0;
              glassMat.microSurface = 1;
              glassMat.reflectivityColor = new BABYLON.Color3(0.2, 0.2, 0.2);
              glassMat.albedoColor = new BABYLON.Color3(0.85, 0.85, 0.85);
              windowGlass.material = glassMat;

          //GUI Elements


            // Once the scene is loaded, just register a render loop to render it
            engine.runRenderLoop(function() {
                scene.render();
            }); // End render loop
        }); // End scene execution
    }); // End loader function
}; // End room.js script
