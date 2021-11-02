# SETUP FOR PANOLENS
    1. Download Panolens.js
    2. Download three.js
    3. Open XAMPP and start APACHE server
        - You will need a server to avoid getting the error CORS policy.
            - Else the images for your panorama will not be shown.

# STEPS

    1. Create a div with an id. This will be your container for you panolens.
    2. Create your script file and include it in your html scripts.

    3. Initialize a variable that will hold your container's id.

    4. Create your PANORAMA:
        const panorama = new PANOLENS.ImagePanorama('image here. directory starts from root of your project folder');

    5. Create your Viewer:
        const viewer = new PANOLENS.Viewer({
            container: <variable of your container's id>,
        });

    6. Create an Infospot:
        Using an image:
            infospot = new PANOLENS.Infospot( 2000, '<image here>');
        Using a DataImage:
            infospot = new PANOLENS.Infospot( 200, PANOLENS.DataImage.Info);

    7. Include an iframe in your html code:
        <iframe id="<id>" allowfullscreen src="<web link or php file directory>"></iframe>

    8. Add events for your infospot:
            infospot.addEventListener("hover",function(){this.focus();})   <- FOCUSES ON INFOSPOT POSITION
            infospot.addEventListener("click",function(){})     <- DO SOMETHING WHEN INFOSPOT IS CLICKED
            infospot.addHoverElement( <text or iframe here>, 0 );   <- USE THIS IF YOU WANT A POP UP MESSAGE ON HOVER. CAN'T USE addEventListener("hover") and addHoverElement() on the same infospot  

    9. Infospot click to change panorama:
            infospot.addEventListener("click",function(){ viewer.setPanorama(<name of your other panorama>); })

    10. Add infospot to your panorama:
            panorama.add(infospot)

    11. Add panorama to your viewer:
            viewer.add(panorama)


Source Links:

# PANOLENS DOCUMENTATION #
    https://pchen66.github.io/Panolens/#Documentation

# FOR MORE AVAILABLE DATAIMAGE # 
    https://pchen66.github.io/panolens.js/docs/DataImage.js.html