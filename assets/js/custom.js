function generateNews() {
    const dateInput = document.getElementById('date').value;
    const headline = document.getElementById('headline').value.trim();
    const imageInput = document.getElementById('imageInput').files[0];

    const dateOutput = document.getElementById('dateOutput');
    const headlineOutput = document.getElementById('headlineOutput');
    const previewImage = document.getElementById('previewImage');

    // Update date if provided
    if (dateInput) {
        const date = new Date(dateInput);
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        dateOutput.textContent = formattedDate;
        dateOutput.classList.remove('hidden');
    } else {
        dateOutput.textContent = '';
        dateOutput.classList.add('hidden');
    }

    // Update headline if provided
    headlineOutput.textContent = headline ? headline : '';

    // Update image if provided
    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function (e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        }
        reader.readAsDataURL(imageInput);
    } else {
        previewImage.src = '';
        previewImage.style.display = 'none';
    }
}
function downloadPreviewImage() {
    const element = document.getElementById('newsPreview');
    html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.download = 'news-preview.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}