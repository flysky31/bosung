function openModal(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.style.display = 'block';
}

// 모달 닫기 함수
var closeModal = document.getElementById('closeModal');
closeModal.onclick = function() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// 모달 외부 클릭 시 모달 닫기
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
    modal.style.display = 'none';
    }
}