document.addEventListener("DOMContentLoaded", function() {
    // This function saves the state of a checkbox to local storage
    function saveCheckboxState(checkbox) {
        localStorage.setItem(checkbox.id, checkbox.checked);
    }
    
    // This function restores the state of a checkbox from local storage
    function restoreCheckboxState(checkbox) {
        var checked = localStorage.getItem(checkbox.id);
        if (checked !== null) { // only set the checked property if the item exists in local storage
            checkbox.checked = checked === 'true';
        }
    }
    
    // Restore the checkbox states from local storage and add event listeners
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        restoreCheckboxState(checkbox); // Restore state
        checkbox.addEventListener('change', function() { // Save state on change
            saveCheckboxState(checkbox);
        });
    });    
    var currentFloor = 1;
    var totalFloors = 5;
    var floors = [];
    for (var i = 1; i <= totalFloors; i++) {
        floors.push(document.getElementById("floor" + i));
    }
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
        floors.forEach(function(floor, index) {
            floor.style.display = (currentFloor === index + 1) ? "block" : "none";
        });
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
