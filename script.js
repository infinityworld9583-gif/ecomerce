/* -------------------------------------------------
   RESET & BASE
------------------------------------------------- */
* { margin:0; padding:0; box-sizing:border-box; }
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background:#f8f9fa;
}

/* -------------------------------------------------
   NAVBAR
------------------------------------------------- */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5%;
  background:#fff;
  box-shadow:0 2px 10px rgba(0,0,0,.08);
  position:sticky;
  top:0;
  z-index:1000;
}

/* ---- LOGO ---- */
.logo {
  font-size:1.8rem;
  font-weight:700;
  color:#2c3e50;
  text-decoration:none;
  display:flex;
  align-items:center;
  gap:.5rem;
}
.logo i { color:#e74c3c; font-size:2rem; }

/* ---- MENU LINKS ---- */
.nav-links {
  display:flex;
  gap:2rem;
  list-style:none;
}
.nav-links a {
  text-decoration:none;
  color:#34495e;
  font-weight:500;
  font-size:1rem;
  position:relative;
  transition:color .3s;
}
.nav-links a:hover { color:#e74c3c; }
.nav-links a::after {
  content:'';
  position:absolute;
  bottom:-6px; left:0;
  width:0; height:2px;
  background:#e74c3c;
  transition:width .3s;
}
.nav-links a:hover::after { width:100%; }

/* ---- SEARCH ---- */
.search-container {
  flex:1;
  max-width:500px;
  margin:0 2rem;
  position:relative;
}
.search-container input {
  width:100%;
  padding:.75rem 1rem .75rem 2.5rem;
  border:1px solid #ddd;
  border-radius:50px;
  font-size:.95rem;
  outline:none;
  transition:all .3s;
}
.search-container input:focus {
  border-color:#e74c3c;
  box-shadow:0 0 0 3px rgba(231,76,60,.1);
}
.search-container i {
  position:absolute;
  left:.9rem; top:50%;
  transform:translateY(-50%);
  color:#95a5a6;
}

/* ---- ICONS ---- */
.nav-icons {
  display:flex;
  gap:1.2rem;
  align-items:center;
}
.icon-btn {
  position:relative;
  background:transparent;
  border:none;
  color:#34495e;
  font-size:1.3rem;
  cursor:pointer;
  padding:.5rem;
  border-radius:50%;
  transition:all .3s;
}
.icon-btn:hover {
  color:#e74c3c;
  background:rgba(231,76,60,.08);
  transform:translateY(-2px);
}
.badge {
  position:absolute;
  top:-6px; right:-6px;
  background:#e74c3c;
  color:#fff;
  font-size:.65rem;
  font-weight:600;
  width:18px; height:18px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
}

/* ---- HAMBURGER ---- */
.menu-toggle {
  display:none;
  flex-direction:column;
  gap:4px;
  cursor:pointer;
}
.menu-toggle span {
  width:25px;
  height:3px;
  background:#34495e;
  border-radius:3px;
  transition:.3s;
}

/* -------------------------------------------------
   RESPONSIVE BREAKPOINTS
------------------------------------------------- */

/* Tablet – hide menu, show hamburger, keep search & icons */
@media (max-width: 768px) {
  .navbar { padding:1rem 4%; }

  .nav-links {
    position:fixed;
    top:70px; left:-100%;
    width:100%;
    height:calc(100vh - 70px);
    background:#fff;
    flex-direction:column;
    align-items:center;
    padding-top:2rem;
    transition:left .4s ease;
    box-shadow:0 10px 20px rgba(0,0,0,.1);
  }
  .nav-links.active { left:0; }

  .nav-links a {
    font-size:1.1rem;
    padding:1rem 0;
    width:100%;
    text-align:center;
  }
  .nav-links a::after { display:none; }

  .search-container { order:3; width:100%; max-width:none; margin:1rem 0 0; }
  .menu-toggle { display:flex; }
}

/* Phone – stack everything vertically */
@media (max-width: 480px) {
  .navbar {
    flex-wrap:wrap;
    gap:1rem;
  }

  .logo { font-size:1.5rem; }
  .logo i { font-size:1.6rem; }

  .search-container { margin:0; }

  .nav-icons { gap:1rem; }
  .icon-btn { font-size:1.1rem; }
}
