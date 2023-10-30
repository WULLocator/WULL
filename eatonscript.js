document.addEventListener("DOMContentLoaded", function() {
    var currentFloor = 1;
    var totalFloors = 4;
    var floor1 = document.getElementById("floor1");
    var floor2 = document.getElementById("floor2");
    var floor3 = document.getElementById("floor3");
    var floor4 = document.getElementById("floor4");
    var prevFloorBtn = document.getElementById("prevFloor");
    var nextFloorBtn = document.getElementById("nextFloor");

    prevFloorBtn.addEventListener("click", function() {
        if (currentFloor > 1) {
            currentFloor--;
            updateFloorVisibility();
        }
    });

    nextFloorBtn.addEventListener("click", function() {
        if (currentFloor < totalFloors) {
            currentFloor++;
            updateFloorVisibility();
        }
    });

    function updateFloorVisibility() {
        floor1.style.display = (currentFloor === 1) ? "block" : "none";
        floor2.style.display = (currentFloor === 2) ? "block" : "none";
        floor3.style.display = (currentFloor === 3) ? "block" : "none";
        floor4.style.display = (currentFloor === 4) ? "block" : "none";
        prevFloorBtn.style.display = (currentFloor > 1) ? "block" : "none";
        nextFloorBtn.style.display = (currentFloor < totalFloors) ? "block" : "none";
    }

    var selectorBtn = document.getElementById("selectorBtn");
    var selectorMenu = document.getElementById("selectorMenu");
    var applyFiltersBtn = document.getElementById("applyFilters");
    
    var maleCheckbox = document.getElementById("maleCheckbox");
    var femaleCheckbox = document.getElementById("femaleCheckbox");
    var bothCheckbox = document.getElementById("bothCheckbox");
    var firstYesCheckbox = document.getElementById("firstYesCheckbox");
    var firstNoCheckbox = document.getElementById("firstNoCheckbox");
    var accessibleYesCheckbox = document.getElementById("accessibleYesCheckbox");
    var accessibleNoCheckbox = document.getElementById("accessibleNoCheckbox");

    var buttons = document.querySelectorAll(".button"); // Update the selector as needed
    var highlighters = document.querySelectorAll(".highlighter");

    selectorBtn.addEventListener("click", function() {
        selectorMenu.style.display = (selectorMenu.style.display === "block") ? "none" : "block";
    });

    applyFiltersBtn.addEventListener("click", function() {
        buttons.forEach(function(button) {
            var type = button.getAttribute("data-type");
            var first = button.getAttribute("data-first");
            var accessible = button.getAttribute("data-accessible");
            
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
            
            if (matchesType && matchesFirst && matchesAccessible) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        });

        highlighters.forEach(function(highlighter) {
            var type = highlighter.getAttribute("data-type");
            var first = highlighter.getAttribute("data-first");
            var accessible = highlighter.getAttribute("data-accessible");
            
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
            
            if (matchesType && matchesFirst && matchesAccessible) {
                highlighter.style.display = "block";
            } else {
                highlighter.style.display = "none";
            }
        });
    });
});
