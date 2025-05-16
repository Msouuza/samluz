    const nao = document.getElementById('nao');

    nao.addEventListener('mouseenter', () => {
      const maxX = window.innerWidth - nao.offsetWidth;
      const maxY = window.innerHeight - nao.offsetHeight;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      nao.style.position = 'fixed';
      nao.style.left = `${randomX}px`;
      nao.style.top = `${randomY}px`;
      nao.style.transform = 'translate(0, 0)';
    });

    document.getElementById('sim').addEventListener('click', () => {
      window.location.href = 'https://www.youtube.com/watch?v=6h4BuzcCDfI';
    });
    