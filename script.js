function showPopup(text) {
    var popup = document.getElementById('popup');
    var popupText = document.getElementById('popupText');
    popupText.textContent = text;
    popup.style.display = 'block';
  }
  
  function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
  }
  