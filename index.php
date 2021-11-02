<?php include 'header.php'; ?>
    <div class="center">
      <img id="notifIndex" src="img/letter.gif" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

    </div>


    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-body text-center">
                <h3 class="mt-2">...</h3>
                <button type="button" class="mt-4 btn btn-secondary" onclick="window.location.href='artGallery.php'">Sures</button>
                <button type="button" class="mt-4 btn btn-primary" onclick="window.location.href='artGallery.php'">Uhh Okay?</button>
            </div>
                <div class="modal-footer border-0">
                    
                </div>
            </div>
        </div>
    </div>

<?php include 'footer.php'; ?>       