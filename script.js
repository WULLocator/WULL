
document.getElementById('btn1').addEventListener('click', function() {
    window.location.href = 'ford.html';
});

document.getElementById('btn2').addEventListener('click', function() {
    window.location.href = 'eaton.html';
});

document.getElementById('btn3').addEventListener('click', function() {
    window.location.href = 'smulton.html';
});

document.getElementById('btn4').addEventListener('click', function() {
    window.location.href = 'building4.html';
});

document.getElementById('btn5').addEventListener('click', function() {
    window.location.href = 'building5.html';
});

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

// Add more event listeners for additional buttons

document.addEventListener("DOMContentLoaded", function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        // Restore the checkbox state from local storage on page load
        restoreCheckboxState(checkbox);

        // Save the checkbox state to local storage on change
        checkbox.addEventListener('change', function() {
            saveCheckboxState(checkbox);
        });
    });
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

    // Apply the filters based on the saved state in localStorage
    maleCheckbox.checked = localStorage.getItem('maleCheckbox') === 'true';
    femaleCheckbox.checked = localStorage.getItem('femaleCheckbox') === 'true';
    bothCheckbox.checked = localStorage.getItem('bothCheckbox') === 'true';
    firstYesCheckbox.checked = localStorage.getItem('firstYesCheckbox') === 'true';
    firstNoCheckbox.checked = localStorage.getItem('firstNoCheckbox') === 'true';
    accessibleYesCheckbox.checked = localStorage.getItem('accessibleYesCheckbox') === 'true';
    accessibleNoCheckbox.checked = localStorage.getItem('accessibleNoCheckbox') === 'true';

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        // Restore state
        checkbox.checked = localStorage.getItem(checkbox.id) === 'true';

        // Save state
        checkbox.addEventListener('change', function() {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // Function to apply filters to buttons
    function applyFilters() {
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
    }

    // Apply filters on page load based on saved settings
    applyFilters();

    selectorBtn.addEventListener("click", function() {
        selectorMenu.style.display = selectorMenu.style.display === "block" ? "none" : "block";
    });

    applyFiltersBtn.addEventListener("click", applyFilters);
});
