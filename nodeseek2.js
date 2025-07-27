// nodeseek.js

(function () {
  const container = document.getElementById("card-container");
  const width = container.style.getPropertyValue("--card-width") || "300px";
  const height = `calc(${width} * 215 / 310)`;

  // 从 data-support-id 属性读取，默认 74
  const supportId = container.getAttribute("data-support-id") || "74";

  container.style.position = "relative";
  container.style.width = width;
  container.style.height = height;

  container.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
      background: linear-gradient(to top right, rgb(7, 16, 45), rgb(58, 60, 84));
      border: 1px solid #27344a;
      border-radius: 10px;
      padding: 20px;
      box-sizing: border-box;
      color: white;
      font-family: Arial, sans-serif;
      width: 100%;
      height: 100%;
    ">
      <!-- Header Section -->
      <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <a href="https://yxvm.com/" target="_blank"><img src="https://img.leu.pp.ua/file/图片/1753587678656_IMG_3481.png" alt="Logo 1" style="height: 22px;"></a>
          <span style="font-weight: bold; font-size: 1.2rem;">+</span>
          <a href="https://www.nodeseek.com/" target="_blank"><img src="https://img.leu.pp.ua/file/图片/1753587680432_IMG_3480.png" alt="Logo 2" style="height: 22px;"></a>
        </div>
        <a href="https://github.com/NodeSeekDev/NodeSupport" style="fill: #ccc; transition: fill 0.2s;" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="22px" height="22px" fill="white">
            <path d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.867 8.167 6.839 9.489.5.09.682-.218.682-.485 0-.24-.01-1.041-.015-1.887-2.781.603-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.893 1.528 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.091.39-1.982 1.029-2.681-.103-.254-.446-1.276.098-2.656 0 0 .84-.269 2.75 1.023a9.564 9.564 0 012.5-.336c.848.004 1.704.115 2.5.336 1.91-1.292 2.75-1.023 2.75-1.023.546 1.38.202 2.402.099 2.656.64.699 1.029 1.59 1.029 2.681 0 3.842-2.337 4.687-4.565 4.934.36.31.68.923.68 1.86 0 1.344-.012 2.429-.012 2.757 0 .268.18.579.688.481C17.135 18.164 20 14.418 20 10 20 4.477 15.523 0 10 0z"/>
          </svg>
        </a>
      </div>
      <!-- Middle Section -->
      <div style="margin-top: 20px;">
        <h3 style="font-size: 14px; margin: 0 0 10px 0; font-weight: bold;">NodeSupport Project</h3>
        <p style="margin: 0; color: #ccc; font-size: 10px;">
          Provide free server sponsorship to high-quality blogs, channels, open-source projects, and popular apps.
        </p>
      </div>
      <!-- Footer Section -->
      <div style="margin-top: 20px; display: flex; justify-content: flex-end; color: #ccc; font-size: 12px;">
        <span style="margin-right: 5px;">Support ID:</span>
        <span style="font-weight: bold;">${supportId}</span>
      </div>
    </div>
  `;
})();
