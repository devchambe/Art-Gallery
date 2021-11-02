const pan = document.querySelector('#container');

// INTERNATIONAL PAINTINGS
  var pearl = document.querySelector('#pearl');
  var saturn = document.querySelector('#saturn');
  var american = document.querySelector('#american');
  var wave = document.querySelector('#wave');
  var memory = document.querySelector('#memory');

// LOCAL PAINTINGS
  var theBuilders1928 = document.querySelector('#theBuilders1928');
  var laLaguna = document.querySelector('#laLagunaEstigia');
  var fruitGatherer = document.querySelector('#fruitGatherer');
  var genesis = document.querySelector('#Genesis');
  var spolarium = document.querySelector('#spolarium');


// ImagePanorama is for your backgrounds.
// It is suggested to have the width x2 of the height of image. 
// Recommend using "EQUIRECTANGULAR" Panorama images
const panorama = new PANOLENS.ImagePanorama('img/bg1.png');
const digitalArts = new PANOLENS.ImagePanorama('img/bg2.png');
const paintings = new PANOLENS.ImagePanorama('img/bg3.png');
const paintingsLocal = new PANOLENS.ImagePanorama('img/bg4.png');

// Viewer is where you will place you panoramas.
const viewer = new PANOLENS.Viewer({
  container: pan,
  autoHideInfospot: false
});

//info logo hoverable

  //FOLDERS ICON

    // infospot(size,image)    serves as clickable / hoverable element in the viewer
        infospot = new PANOLENS.Infospot( 2000, 'img/welcome.png');
    // position.set(x,y,z)    sets the position of the infospot
        infospot.position.set( 0, 400, -5000 );

        folder1 = new PANOLENS.Infospot( 1500, 'img/Folders Icon/folder1.png');
        folder1.position.set( -8000, 400, -5000 );

        folder2 = new PANOLENS.Infospot( 1500, 'img/Folders Icon/folder2.png');
        folder2.position.set( 8000, 400, -5000 );

        folder3 = new PANOLENS.Infospot( 1500, 'img/Folders Icon/folder3.png');
        folder3.position.set( -5000, 400, 5000 );

        digital_main = new PANOLENS.Infospot( 1500, 'img/Folders Icon/folderBack.png');
        digital_main.position.set( -5000, 400,2300 );

        paintings_main = new PANOLENS.Infospot( 1000, 'img/Folders Icon/folderBack2.png');
        paintings_main.position.set(-7000, 400, 100 );

        paintings_main2 = new PANOLENS.Infospot( 1000, 'img/Folders Icon/folderBack3.png');
        paintings_main2.position.set(7000, 400, -100 );

        paintings_int = new PANOLENS.Infospot( 1000, 'img/Folders Icon/folder5.png');
        paintings_int.position.set(-7000, 400, -100 );

        paintings_local = new PANOLENS.Infospot( 1000, 'img/Folders Icon/folder4.png');
        paintings_local.position.set(7000, 400, -100 );

        intP = new PANOLENS.Infospot(2000, 'img/int1.png');
        intP.position.set(-5000, 400, 3000 );

        localP = new PANOLENS.Infospot(2000, 'img/local.png');
        localP.position.set(-5000, 400, 3000 );

 

  //IMAGES
    //DIGITAL ART
      // PANOLENS.DataImage.Info  are icons 
      dg1 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
      dg2 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
      dg3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
      dg4 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
      dg5 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
      dg6 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
      dg7 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
      dg8 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
      dg9 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
      dg10 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
      dg11 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
      dg12 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
      dg13 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
      dg14 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
      dg15 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);

      dg1.position.set( 5500, -1000, -4000 );
      // addEventListener(event,function)  allows user-made functions to be triggered by the event
      dg1.addEventListener("hover",function(){this.focus();})
      dg1.addEventListener("click",function(){window.open('https://www.artstation.com/artwork/bKZ2za');})

      dg2.position.set(-3500, -3000, -4000);
      dg2.addEventListener("hover",function(){this.focus();})
      dg2.addEventListener("click",function(){window.open('https://www.instagram.com/p/CNK3bPGBp_m/');})

      dg3.position.set(-6000,1000,-4000);
      dg3.addEventListener("hover",function(){this.focus();})
      dg3.addEventListener("click",function(){window.open('https://www.instagram.com/p/CQfnGlchjXJ/');})

      dg4.position.set(-1000,1000,-4000);
      dg4.addEventListener("hover",function(){this.focus();})
      dg4.addEventListener("click",function(){window.open('https://wallhere.com/en/wallpaper/1981963');})

      dg5.position.set(-500,-1000,-3000);
      dg5.addEventListener("hover",function(){this.focus();})
      dg5.addEventListener("click",function(){window.open('https://www.instagram.com/p/CNSo4wKhBn2/');})

      dg6.position.set(500,-1000,-3000);
      dg6.addEventListener("hover",function(){this.focus();})
      dg6.addEventListener("click",function(){window.open('https://www.artstation.com/artwork/5EqYA');})

      dg7.position.set(2000,1500,-3000);
      dg7.addEventListener("hover",function(){this.focus();})
      dg7.addEventListener("click",function(){window.open('https://www.instagram.com/p/CPGJ8wDjYj3/');})
      
      dg8.position.set(8000, 1500, 1000);
      dg8.addEventListener("hover",function(){this.focus();})
      dg8.addEventListener("click",function(){window.open('https://www.instagram.com/p/CUxeiNfKqBI/');})

      dg9.position.set(5000, 2500, 5000);
      dg9.addEventListener("hover",function(){this.focus();})
      dg9.addEventListener("click",function(){window.open('https://www.pixiv.net/en/artworks/58057641');})

      dg10.position.set(7000, 0, 5000);
      dg10.addEventListener("hover",function(){this.focus();})
      dg10.addEventListener("click",function(){window.open('https://www.instagram.com/p/CO8D-S4hJ1L/');})
      
      dg11.position.set(4000, -2500, 6000);
      dg11.addEventListener("hover",function(){this.focus();})
      dg11.addEventListener("click",function(){window.open('https://rossdraws.com/products/miracle');})

      dg12.position.set(8000, -2500,3000);
      dg12.addEventListener("hover",function(){this.focus();})
      dg12.addEventListener("click",function(){window.open('https://www.artstation.com/artwork/zKRBm');})

      dg13.position.set(8000, -5500,3000);
      dg13.addEventListener("hover",function(){this.focus();})
      dg13.addEventListener("click",function(){window.open('https://www.facebook.com/photo/?fbid=149014410728120&set=pob.100068586863515');})

      dg14.position.set(-100, 700,3000);
      dg14.addEventListener("hover",function(){this.focus();})
      dg14.addEventListener("click",function(){window.open('https://www.instagram.com/p/CLrF2dwlgIk/');})

      dg15.position.set(-30, -1500,3000);
      dg15.addEventListener("hover",function(){this.focus();})
      dg15.addEventListener("click",function(){window.open('https://www.instagram.com/p/CViOxYQvDw5/');})

    //INTERNATION PAINTINGS
      ip1 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
      ip1.position.set(0,100,1000);

      // addHoverElement(text/iframe, position from DataImage);
      ip1.addHoverElement( wave, 0 );

      ip2 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
      ip2.position.set(800,10,400);
      ip2.addHoverElement( pearl, 0 );

      ip3 = new PANOLENS.Infospot(150, PANOLENS.DataImage.Info);
      ip3.position.set(2000,100,-1000);
      ip3.addHoverElement( american, 0 );

      ip4 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
      ip4.position.set(300,100,-1000);
      ip4.addHoverElement( memory, 0 );
      
      ip5 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
      ip5.position.set(-600,100,-1000);
      ip5.addHoverElement(saturn, 0 );

    //LOCAL PAINTINGS
      lp1 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
      lp1.position.set(0,100,1000);
      lp1.addHoverElement( theBuilders1928, 0 );

      lp2 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
      lp2.position.set(800,10,400);
      lp2.addHoverElement(laLaguna, 0)

      lp3 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
      lp3.position.set(2000,100,-1000);
      lp3.addHoverElement(fruitGatherer, 0)

      lp4 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
      lp4.position.set(300,100,-1000);
      lp4.addHoverElement(genesis, 0);

      lp5 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
      lp5.position.set(-400,100,-1000);
      lp5.addHoverElement(spolarium, 0);

  //EVENT LISTENERS
    infospot.addEventListener( "hover", function(){this.focus();} );

    folder1.addEventListener( "hover", function(){this.focus();});
    folder1.addEventListener( "click", function(){viewer.setPanorama(digitalArts);});
    
    folder2.addEventListener( "hover", function(){this.focus();});
    folder2.addEventListener( "click", function(){viewer.setPanorama(paintings);});

    intP.addEventListener( "hover", function(){this.focus();} );
    localP.addEventListener( "hover", function(){this.focus();} );


  //Back Button
    digital_main.addEventListener( "hover", function(){this.focus();});
    digital_main.addEventListener("click",function(){viewer.setPanorama(panorama);});

    paintings_main.addEventListener( "hover", function(){this.focus();});
    paintings_main.addEventListener("click",function(){viewer.setPanorama(panorama);});

    paintings_main2.addEventListener( "hover", function(){this.focus();});
    paintings_main2.addEventListener("click",function(){viewer.setPanorama(panorama);});

    paintings_local.addEventListener( "hover", function(){this.focus();});
    paintings_local.addEventListener("click",function(){viewer.setPanorama(paintingsLocal);});

  
  // panorama.add()  always add your infospots in your panorama or else it won't show up
  panorama.add( infospot, folder1, folder2);
  digitalArts.add(digital_main, dg1, dg2, dg3, dg4, dg5, dg6, dg7, dg8, dg9, dg10, dg11, dg12, dg13, dg14, dg15);
  paintings.add(paintings_main, paintings_local, intP, ip1, ip2, ip3, ip4, ip5);
  paintingsLocal.add(paintings_int, paintings_main2, localP, lp1, lp2, lp3, lp4, lp5);

  // viewer.add() add all your panoramas in the viewer. This will only show the panoramas in that viewer.
  viewer.add(panorama, digitalArts, paintings, paintingsLocal);
