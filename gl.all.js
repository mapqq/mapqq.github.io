const currentLocationHref = window.location.href;
const targetEnv = ['e5test', 'e5test2', 'ehospital2', 'e5'];
const targetHos = ['ccscrbyyadmin', 'syeswyyadmin'];

const removeCache = () => {
  const hid = sessionStorage.getItem('hospitalID') || sessionStorage.getItem('hospital_id') || localStorage.getItem('hospitalID') || localStorage.getItem('hospital_id');
  const isTarget = targetEnv.some(env => currentLocationHref.includes(env)) && targetHos.includes(hid);
  if (isTarget) {
    localStorage.clear();
    sessionStorage.clear();
  }
};

window.onload = function () {
  removeCache();
}

setTimeout(() => {
  removeCache();
}, 5000);

window.addEventListener('storage', function (e) {
  localStorage.clear();
  sessionStorage.clear();
});
