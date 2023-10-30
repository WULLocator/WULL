
document.getElementById('btn1').addEventListener('click', function() {
    window.location.href = 'eaton.html';
});

document.getElementById('btn2').addEventListener('click', function() {
    window.location.href = 'building2.html';
});

document.getElementById('btn3').addEventListener('click', function() {
    window.location.href = 'building3.html';
});

document.getElementById('btn4').addEventListener('click', function() {
    window.location.href = 'building4.html';
});

document.getElementById('btn5').addEventListener('click', function() {
    window.location.href = 'building5.html';
});

// Add more event listeners for additional buttons

document.addEventListener("DOMContentLoaded", function() {
    var selectorBtn = document.getElementById("selectorBtn");
    var selectorMenu = document.getElementById("selectorMenu");
    var maleCheckbox = document.getElementById("maleCheckbox");
    var femaleCheckbox = document.getElementById("femaleCheckbox");
    var bothCheckbox = document.getElementById("bothCheckbox");
    var firstYesCheckbox = document.getElementById("firstYesCheckbox");
    var firstNoCheckbox = document.getElementById("firstNoCheckbox");
    var accessibleYesCheckbox = document.getElementById("accessibleYesCheckbox");
    var accessibleNoCheckbox = document.getElementById("accessibleNoCheckbox");
    var applyFiltersBtn = document.getElementById("applyFilters");
    var buttons = document.querySelectorAll(".button");
    
    selectorBtn.addEventListener("click", function() {
        if (selectorMenu.style.display === "none" || selectorMenu.style.display === "") {
            selectorMenu.style.display = "block";
        } else {
            selectorMenu.style.display = "none";
        }
    });

    applyFiltersBtn.addEventListener("click", function() {
        buttons.forEach(function(button) {
            var type = button.getAttribute("data-type");
            var first = button.getAttribute("data-first");
            var accessible = button.getAttribute("data-accessable");
            
            // Check if button matches the selected filters
            var matchesType = (
            (maleCheckbox.checked && type === "male") ||
            (femaleCheckbox.checked && type === "female") ||
            (bothCheckbox.checked && type === "both") ||
            (!maleCheckbox.checked && !femaleCheckbox.checked && !bothCheckbox.checked)
        );
            var matchesFirst = (
            (firstYesCheckbox.checked && first === "yes") ||
            (firstNoCheckbox.checked && first === "no") ||
            (!firstYesCheckbox.checked && !firstNoCheckbox.checked)
        );
            var matchesAccessible = (
            (accessibleYesCheckbox.checked && accessible === "yes") ||
            (accessibleNoCheckbox.checked && accessible === "no") ||
            (!accessibleYesCheckbox.checked && !accessibleNoCheckbox.checked)
        );
            
            // Show or hide the button based on the filters
            if (matchesType && matchesFirst && matchesAccessible) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        });
    });
});
