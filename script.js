document.getElementById('convertButton').addEventListener('click', function() {
    console.log("image")
    const fileInput = document.getElementById('fileInput');
    const responseDiv = document.getElementById('response');
  
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const apiUrl = 'http://192.168.10.212:3000/imageType';
  
      fetch(apiUrl)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error getting image type');
          }
        })
        .then(data => {
          const imageType = data.extension;  
          if (['jpeg', 'jpg', 'png' , 'webp','jfif']) {
            const reader = new FileReader();
  
            reader.onload = function(event) {
              const img = new Image();
              img.src = event.target.result;
              img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
  
                const convertedImageData = canvas.toDataURL(`image/${imageType}`);
                const downloadLink = document.createElement('a');
                downloadLink.href = convertedImageData;
                downloadLink.download = `image_converted.${imageType}`;
                downloadLink.click();
              };
            };
  
            reader.readAsDataURL(file);
          } else {
            throw new Error('Unsupported image type');
          }
        })
        
    } else {
      responseDiv.extContent = 'Please select an image file.';
    }
  });
  