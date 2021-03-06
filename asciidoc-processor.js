module.exports = function (registry) {
  registry.docinfoProcessor(function () {
    this.atLocation('head');
    this.process(function () {
      return `<link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
<link rel="icon" type="image/png" href="https://syndesis.io/images/favicon.png">`;
    });
  });
  registry.postprocessor(function() {
    this.process(function (doc, output) {
      return output.replace(/<body([^>]*)(class="([^"]+)")([^>]*)>/, `<body class="page $3" $1 $4>
<div id="wrapper">
  <a href="https://github.com/syndesisio" class="github-corner hidden-md-down" aria-label="View source on Github" rel="nofollow" target="_blank">
    <svg width="74" height="74" viewBox="0 0 250 250" style="fill:#fff;z-index:2000;color:#0088ce;mix-blend-mode:screen;position:absolute;top:0;border:0;right:0" aria-hidden="true">
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7
          120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9
          125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin:130px 106px" class="octo-arm"></path>
      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6
          C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0
          C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1
          C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4
          C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9
          C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5
          C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9
          L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
    </svg>
  </a>
  <nav class="navbar topnav fixed-top navbar-inverse bg-primary navbar-toggleable-md sps sps--abv">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#top-nav" aria-controls="top-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a href="/" title="Syndesis - Open source integration platform">
  <svg id="artwork" xmlns="http://www.w3.org/2000/svg"
    width="190px" height="39.33px"
    viewBox="0 0 1300 300"
    preserveAspectRatio="xMidYMin slice">
      <defs>
        <style>.cls-1{fill:#9adde8;}.cls-2{fill:#49badc;}.cls-3{fill:#fff;}</style>
      </defs>
      <title>Syndesis - Open source integration platform</title>
      <polygon class="cls-1" points="129.95 98.77 33.99 144.38 122.22 167.37 218.18 121.75 129.95 98.77"/>
      <polygon class="cls-2" points="218.18 121.75 218.18 121.75 122.22 167.37 242.17 198.61 218.18 121.75"/>
      <polygon class="cls-1" points="154.99 86.86 131 10 10 67.52 129.95 98.77 154.99 86.86"/>
      <polygon class="cls-2" points="33.99 144.38 129.95 98.77 10 67.52 10 67.52 33.99 144.38"/>
      <polygon class="cls-2" points="189.64 25.27 131 10 154.99 86.86 213.63 102.14 189.64 25.27"/>
      <polygon class="cls-2" points="38.54 164 62.53 240.86 121.17 256.13 121.17 256.13 97.18 179.27 97.18 179.27 38.54 164"/>
      <polygon class="cls-1" points="242.17 198.61 122.22 167.37 97.18 179.27 121.17 256.13 242.17 198.61"/>
      <path class="cls-3" d="M358.91,210.23c-23.57,0-43.44-17.22-44.06-41.6H329.2c.41,22.74,17.21,29.3,37.09,29.3,16.6,0,35.65-9.63,35.65-28.48,0-14.76-10.65-21.73-23.15-25.82-24-8-60.45-15.58-60.45-47.55,0-25.82,23.77-40,47.13-40,19.47,0,44.88,6.77,48.15,35.25H399.28c-.41-18.24-17-23-32.17-23-15.37,0-34.43,7.79-34.43,25.82,0,42,83.61,23,83.61,74C416.29,200.39,388.62,210.23,358.91,210.23Z"/>
      <path class="cls-3" d="M484.32,143.22l-54.51-84h17l45.29,71.52L537.4,59.2h14.34l-54.1,83.61v64.34H484.32Z"/>
      <path class="cls-3" d="M572.24,59.2H587.4L669,189.32h.41V59.2h13.32v148h-16.8L586,79.28h-.41V207.15H572.24Z"/>
      <path class="cls-3" d="M760,59.2c48.56,0,76.23,25,76.23,74s-27.67,74-76.23,74H720V59.2Zm3.27,135.66c41.6,0,58.61-24.39,58.61-61.69,0-43.64-25.61-62.91-67.62-61.68h-20.9V194.86Z"/>
      <path class="cls-3" d="M870.19,207.15V59.2H958.1V71.49H883.51v53.08h71.73v12.29H883.51v58h77.67v12.29Z"/>
      <path class="cls-3" d="M1030.44,210.23c-23.56,0-43.44-17.22-44.05-41.6h14.34c.41,22.74,17.21,29.3,37.09,29.3,16.6,0,35.66-9.63,35.66-28.48,0-14.76-10.66-21.73-23.16-25.82-24-8-60.45-15.58-60.45-47.55,0-25.82,23.77-40,47.13-40,19.47,0,44.88,6.77,48.16,35.25h-14.35c-.41-18.24-17-23-32.17-23-15.37,0-34.43,7.79-34.43,25.82,0,42,83.61,23,83.61,74C1087.82,200.39,1060.16,210.23,1030.44,210.23Z"/>
      <path class="cls-3" d="M1121.63,207.15V58.58H1135V207.15Z"/>
      <path class="cls-3" d="M1212.62,210.23c-23.56,0-43.44-17.22-44.06-41.6h14.35c.41,22.74,17.21,29.3,37.09,29.3,16.6,0,35.66-9.63,35.66-28.48,0-14.76-10.66-21.73-23.16-25.82-24-8-60.45-15.58-60.45-47.55,0-25.82,23.77-40,47.13-40,19.47,0,44.88,6.77,48.16,35.25H1253c-.41-18.24-17-23-32.17-23-15.37,0-34.43,7.79-34.43,25.82,0,42,83.61,23,83.61,74C1270,200.39,1242.34,210.23,1212.62,210.23Z"/>
    </svg>
  </a>

  <div class="collapse navbar-collapse" id="top-nav">
    <ul class="navbar-nav ml-auto mt-2 mt-md-0 mr-lg-4">
      <li class="nav-item ml-lg-3 ml-0">
        <a class="nav-link" href="/quickstart">Quickstart</a>
      </li>
      <li class="nav-item ml-lg-3 ml-0">
        <a class="nav-link" href="/docs">Documentation</a>
      </li>
      <li class="nav-item ml-lg-3 ml-0">
        <a class="nav-link" href="/blog">Blog</a>
      </li>
      <li class="nav-item ml-lg-3 ml-0">
        <a class="nav-link" href="/faq">FAQ</a>
      </li>
      <li class="nav-item ml-lg-3 ml-0">
        <a class="nav-link" href="/community">Community</a>
      </li>
      <li class="nav-item ml-lg-3 ml-0">
        <a class="nav-link" href="/about">About</a>
      </li>
    </ul>
    </div>
  </nav>

  <div class="article">`).replace(/<\/body>/, `</div>

  <footer class="page-footer text-center">
    <div class="row">
      <section class="col-md-6">
        <i class="fab fa-3x fa-github" aria-hidden="true"></i>
        <h4>Get the source code</h4>
        <p>Stay tuned to contribute or build your own solution.</p>
        <p class="link-button">
          <a href="https://github.com/syndesisio" rel="nofollow" target="_blank" class="btn btn-primary">
            Syndesis on GitHub
          </a>
        </p>
      </section>
      <section class="col-md-6">
        <i class="fas fa-3x fa-comments"></i>
        <h4>Connect with us</h4>
        <p>Chat with the Syndesis community.</p>
        <p class="link-button">
          <a href="https://gitter.im/syndesisio/community" rel="nofollow" target="_blank" class="btn btn-primary">syndesisio on Gitter</a>
        </p>
      </section>
    </div>
    <div class="rh-logo">
      <section>
        <a href="https://www.redhat.com" rel="nofollow" title="Red Hat, Inc." target="_blank">
          <img width="128" height="42" src="/images/redhatnew.svg" alt="Red Hat, Inc.">
        </a>
      </section>
    </div>
  </footer>
</div>
</body>
`);
    });
  });
}
