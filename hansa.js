
 class ClickableImage {
    constructor(imageId, audioId) {
      this.image = document.getElementById(imageId);
      this.audio = document.getElementById(audioId);
  
      this.image.addEventListener("click", () => {
        this.audio.play();
      });
    }
  }
  
  const image1 = new ClickableImage("my-image", "my-audio");
  const image2 = new ClickableImage("my-image1", "my-audio1");
  const image3 = new ClickableImage("my-image2", "my-audio2");
  
 
  
  
    const h6 = document.getElementById("play-audio3");
    const audio = document.getElementById("my-audio3");
  
    h6.addEventListener("click", function() {
      audio.play();
    });
  
  