(function(w,g){w[g]=w[g]||{};
 w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');
 (function(){
  const path = window.location.pathname;
  const isHome = /(^\/$|index\.html$)/.test(path);
  if(!isHome) return;
  if(sessionStorage.getItem('ageGateShown') === '1') return;
  sessionStorage.setItem('ageGateShown', '1');

  const bd = document.createElement('div');
  bd.className = 'modal-backdrop';
  bd.innerHTML = `
    <div class="modal">
      <h3>Policy Notice</h3>
      <p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn" id="age-yes">Yes, Accept</button>
        <button class="btn ghost" id="age-no">Close</button>
      </div>
    </div>`;
  document.body.appendChild(bd);
  bd.style.display = 'flex';

  function closeGate(){ 
    bd.style.display = 'none'; 
    bd.remove(); 
  }

  // ✅ Redirect when "Yes" is clicked
  bd.querySelector('#age-yes').addEventListener('click', function(){
    window.location.href = "/index.html"; // change to your target page
  });

  // ✅ Just close modal when "No" is clicked
  bd.querySelector('#age-no').addEventListener('click', closeGate);

})();