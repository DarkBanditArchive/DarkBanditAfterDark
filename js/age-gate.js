(function () {
    const KEY = "darkbandit_age_verified";
    const gate = document.getElementById("age-gate");
    const enter = document.getElementById("age-enter");
    const leave = document.getElementById("age-leave");
    const error = document.getElementById("age-error");

    if (!gate) return;

    if (localStorage.getItem(KEY) === "yes") {
        gate.remove();
        return;
    }

    document.body.style.overflow = "hidden";

    enter.addEventListener("click", function () {
        localStorage.setItem(KEY, "yes");
        gate.remove();
        document.body.style.overflow = "";
    });

    leave.addEventListener("click", function () {
        error.style.display = "block";
        error.textContent = "You must be 18 or older to enter this website.";
    });
})();