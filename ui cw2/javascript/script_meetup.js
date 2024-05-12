// Class representing a Meetup
class Meetup {
    // Static property to keep track of the last assigned ID
    static lastId = 0;

    constructor(name, description, date, time, location, tags, link) {
        // Assign a unique ID to the Meetup
        this.id = Meetup.generateId();
        this.name = name;
        this.description = description;
        this.date = new Date(date);
        this.time = time;
        this.location = location;
        this.tags = tags;
        this.link = link;
    }

    // Method to generate a unique ID for each Meetup
    static generateId() {
        Meetup.lastId += 1;
        return Meetup.lastId;
    }


    // Method to check if meetup matches search term
    isMatch(searchTerm) {
        const searchText = searchTerm.toLowerCase();
        return (
            this.name.toLowerCase().includes(searchText) ||
            this.description.toLowerCase().includes(searchText) ||
            this.tags.some(tag => tag.toLowerCase().includes(searchText))
        );
    }

    // Formatting method for displaying time in HH:MM format
    formatTime() {
        return this.time;
    }

    // Static method to filter meetups by date and sort them
    static filterByDate(meetups) {
        return meetups.sort((a, b) => a.date - b.date);
    }

    // Static method to randomly shuffle the meetups for closest distance
    static filterByDistance(meetups) {
        // Shuffle the meetups array randomly
        for (let i = meetups.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [meetups[i], meetups[j]] = [meetups[j], meetups[i]];
        }
        return meetups;
    }
}

// Meetup data with full information
const meetups = [
    new Meetup(
        "Glasgow Jam Session",
        "Bring your instrument and enjoy a relaxed jam session with a variety of genres. Musicians of all levels are welcome!",
        "2024-05-17",
        "6:00 PM",
        "Glasgow Green",
        ["jam session", "instrumental", "all genres"],
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8959.12526238601!2d-4.2543700128417745!3d55.84910949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846a37a817f3b%3A0x4822cab96021be31!2sGlasgow%20Green!5e0!3m2!1sen!2suk!4v1715293741765!5m2!1sen!2suk"
    ),
    new Meetup(
        "Electronic Music Production Workshop",
        "Learn the basics of electronic music production using software like Ableton Live.",
        "2024-05-20",
        "6:30 PM",
        "SAE Institute Glasgow",
        ["electronic music", "production", "workshop", "ableton live"],
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.666670926918!2d-4.28282507805724!3d55.85109887978654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888467d36f698e9%3A0xe6a507bebdbb6af7!2sSAE%20Institute%20Glasgow!5e0!3m2!1sen!2suk!4v1715292921296!5m2!1sen!2suk"
    ),
    new Meetup(
        "Vinyl Record Swap Meet",
        "Buy, sell, or trade vinyl records. A great opportunity for music lovers and collectors.",
        "2024-05-12",
        "12:30 PM",
        "The Record Factory",
        ["vinyl records", "swap meet", "collecting", "music lovers"],
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.5265665630945!2d-4.301728923038927!3d55.870880073128184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488845dabefb9615%3A0x6e445b6e6343b4fc!2sThe%20Record%20Factory!5e0!3m2!1sen!2suk!4v1715293608164!5m2!1sen!2suk"
    ),
    new Meetup(
        "Glasgow Singer-Songwriter Circle",
        "Share your original songs, get feedback, and connect with other singer-songwriters.",
        "2024-05-24",
        "7:00 PM",
        "The Coffee Bean",
        ["singer-songwriter", "original music", "feedback", "performance"],
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35844.58642080963!2d-4.344270237913911!3d55.84034006769684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488845db5c15e599%3A0x5f480bfc12520515!2sCoffee%20Bean!5e0!3m2!1sen!2suk!4v1715293506580!5m2!1sen!2suk"
    ),
    new Meetup(
        "Music Theory for Beginners Workshop",
        "Gain a basic understanding of music theory and how it applies to playing and composing music.",
        "2024-05-18",
        "11:00 AM",
        "Glasgow Music School",
        ["music theory", "beginners", "workshop", "composition"],
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17932.786210524417!2d-4.30028802568357!3d55.81757429999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48884702827c7ff1%3A0xfb6aee220b39b7b4!2sGlasgow%20Music%20School!5e0!3m2!1sen!2suk!4v1715293396263!5m2!1sen!2suk"
    ),
    new Meetup(
        "Acoustic Guitar Workshop",
        "Learn to play acoustic guitar from scratch in this beginner-friendly workshop. No prior experience needed.",
        "2024-06-02",
        "2:00 PM",
        "12 Guitars",
        ["acoustic guitar", "workshop", "beginners", "music lessons"],
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.9652912876563!2d-4.319205803210407!3d55.86326859999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488846772cb3912b%3A0x7dd74fd2462d0b44!2s12%20Guitars!5e0!3m2!1sen!2suk!4v1715293939408!5m2!1sen!2suk"
    ),
];

// References to the DOM elements
const meetupList = document.getElementById('meetup-list');
const searchInput = document.getElementById('search-input');
const sortBySelect = document.getElementById('sort-by');

// Function to display a single meetup item
function displayMeetup(meetup) {
    const meetupItem = document.createElement('li');
    meetupItem.classList.add('meetup-item');
    meetupItem.innerHTML = `
        <div class="row align-items-center">
          <div class="col text-start fw-bold">${meetup.name}</div>
          <div class="col-6 text-start">${meetup.description}</div>
          <div class="col pt-3"><button type="button" class="btn btn-primary" id="calendar1" data-bs-toggle="modal" data-bs-target="#${meetup.id}"><i class="bi bi-calendar-plus"></i></button> <p>${meetup.date.toLocaleDateString()}</p></div>
        </div>
        <div class="modal fade" id="${meetup.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">${meetup.name}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-start">
                <h6>Information about the Meetup</h6>
                <p>${meetup.description}</p>
                <div class="container d-flex">
                  <div>
                    <p><i class="bi bi-clock"></i> ${meetup.time}</p>
                    <p><i class="bi bi-calendar-event"></i> ${meetup.date.toLocaleDateString()}</p>
                    <p><i class="bi bi-geo-alt-fill"></i> ${meetup.location}</p>
                  </div>
                  <div class="ms-2">
                    <iframe class="map" src="${meetup.link}" allowfullscreen="" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary post" id="addToCalendar" onclick="displayToast1()">Add to Calendar</button>
              </div>
            </div>
          </div>
        </div>
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
          <div id="liveToast1" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <i class="bi bi-check-lg"></i>
              <strong class="me-auto">Meetup</strong>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body text-start">
                  The Meetup was successfully added to the Calendar!
            </div>
          </div>
        </div>
    `;
    meetupList.appendChild(meetupItem);
}

// Function to display meetups
function displayMeetups(meetupData) {
    meetupList.innerHTML = ''; // Clear existing list

    if (meetupData.length === 0) {
        meetupList.innerHTML = '<p class="empty">No meetups at the moment. Start your own!</p>';
    } else {
        meetupData.forEach(meetup => displayMeetup(meetup));
    }
}

// Function to search meetups based on the search term
function searchMeetups(meetups, searchTerm) {
    return meetups.filter(meetup => meetup.isMatch(searchTerm));
}

// Function to sort and display meetups based on the selected sort option
function sortAndDisplayMeetups(meetupData) {
    const selectedOption = sortBySelect.value;

    switch (selectedOption) {
        case 'closest-date':
            meetupData = Meetup.filterByDate(meetupData);
            break;
        case 'closest-distance':
            meetupData = Meetup.filterByDistance(meetupData);
            break;
        default:
            // Default to no sorting
            break;
    }

    displayMeetups(meetupData);
}

// Event listener for search input
searchInput.addEventListener('keyup', () => {
    const searchTerm = searchInput.value.trim();
    const filteredMeetups = searchMeetups(meetups, searchTerm);
    sortAndDisplayMeetups(filteredMeetups);
});

// Event listener for sort by selection change
sortBySelect.addEventListener('change', () => {
    const searchTerm = searchInput.value.trim();
    const filteredMeetups = searchMeetups(meetups, searchTerm);
    sortAndDisplayMeetups(filteredMeetups);
});

// Initial display of all meetups
displayMeetups(meetups);

// Get references to the form, form container, and meetup display container
const formContainer = document.querySelector('.form-container');
const form = document.querySelector('.form');
const meetupContainer = document.querySelector('.meetup-container');

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    // Extract form data
    const name = document.getElementById('inputName').value;
    const description = document.getElementById('inputDesc').value;
    const time = document.getElementById('inputTime').value;
    const date = document.getElementById('inputDate').value;
    const location = document.getElementById('inputLoc').value;
    const link = document.getElementById('inputLink').value;
    const tags = document.getElementById('inputTags').value;

    // Ask for confirmation before posting the meetup
    const confirmation = window.confirm("Are you sure you want to post this meetup?");
    if (confirmation) {
        // Create the meetup display
        createMeetupDisplay({ name, description, time, date, location, link, tags });

        // Hide the form and show the meetup display
        formContainer.style.display = 'none';
        meetupContainer.style.display = 'block';
    }
}


// Function to create the meetup display
function createMeetupDisplay(meetup) {
    // Clear existing meetup display
    meetupContainer.innerHTML = '';

    // Create the markup for the meetup
    const meetupMarkup = `
        <h4>Your Meetup</h4>
        <div class="meetup-item1 container align-items-center p-3">
          <p><b>Name:</b> ${meetup.name}</p>
          <p><b>Description:</b> ${meetup.description}</p>
          <p><b>Time:</b> ${meetup.time}</p>
          <p><b>Date:</b> ${meetup.date}</p>
          <p><b>Location:</b> ${meetup.location}</p>
          <p><b>Google Maps Link:</b> <a href="${meetup.link}" target="_blank">Location Link</a></p>
          <p><b>Tags:</b> ${meetup.tags}</p>
          <button id="removeMeetupBtn" class="btn btn-danger">Remove Meetup</button>
        </div>
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
          <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <i class="bi bi-check-lg"></i>
              <strong class="me-auto">Meetup</strong>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                  Your Meetup was successfully posted!
            </div>
          </div>
        </div>


    `;

    // Append the markup to the meetup container
    meetupContainer.innerHTML = meetupMarkup;

    // Add an event listener to the remove button
    document.getElementById('removeMeetupBtn').addEventListener('click', handleRemoveMeetup);
    displayToast();
}

// Function to handle meetup removal
function handleRemoveMeetup() {
    // Hide the meetup display and show the form
    meetupContainer.style.display = 'none';
    formContainer.style.display = 'block';

    // Clear the meetup container
    meetupContainer.innerHTML = '';

    // Optionally, clear the form fields
    form.reset();
}

// Add an event listener for the form's 'submit' event
form.addEventListener('submit', handleFormSubmission);

function displayToast() {
    const toastEl = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

function displayToast1() {
    const toastEl = document.getElementById('liveToast1');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

flatpickr('#inputDate', {
  altInput: true, // Show alternative human-readable format
  altFormat: "F j, Y", // Specify human-readable format (e.g., Tuesday, June 18, 2024)
  dateFormat: "d-m-Y" // Specify format used for meetup object (e.g., 2024-06-18)
});

flatpickr('#inputTime', {
  enableTime: true,
  noCalendar: true, // Hide calendar since we only need time selection
  dateFormat: "h:i K", // Include time format with 12-hour clock (h:i) and AM/PM (K)
});

// Get elements
var elements = {
	// Calendar element
	calendar : document.getElementById("events-calendar"),
	// Input element
	events : document.getElementById("events")
}

// Create the calendar
elements.calendar.className = "material-theme custom-yellow";
var calendar = jsCalendar.new(elements.calendar);

// Create events elements
elements.title = document.createElement("div");
elements.title.className = "title";
elements.events.appendChild(elements.title);
elements.subtitle = document.createElement("div");
elements.subtitle.className = "subtitle";
elements.events.appendChild(elements.subtitle);
elements.list = document.createElement("div");
elements.list.className = "list";
elements.events.appendChild(elements.list);
elements.actions = document.createElement("div");
elements.actions.className = "action";
elements.events.appendChild(elements.actions);

var events = {};
var date_format = "DD/MM/YYYY";
var current = null;

// Function to add all meetups to the calendar
function populateCalendarWithMeetups() {
  for (const meetup of meetups) {
    // Create a Date object from the meetup date string
    const meetupDate = new Date(meetup.date);

    // Get the date string in the specified format
    const eventId = jsCalendar.tools.dateToString(meetupDate, date_format, "en");

    // If no events for that date, create an empty array
    if (!events.hasOwnProperty(eventId)) {
      events[eventId] = [];
    }

    // Add the meetup event to the corresponding date
    events[eventId].push({
      name: meetup.name,
      // Add other meetup details as needed (e.g., time, location, description)
      time: meetup.time,
      location: meetup.location,
      description: meetup.description
    });
  }
}

// Call the function to populate the calendar with meetups
populateCalendarWithMeetups();

var showEvents = function(date){
	// Date string
	var id = jsCalendar.tools.dateToString(date, date_format, "en");
	// Set date
	current = new Date(date.getTime());
	// Set title
	elements.title.textContent = id;
	// Clear old events
	elements.list.innerHTML = "";
	// Add events on list
	if (events.hasOwnProperty(id) && events[id].length) {
		// Number of events
		elements.subtitle.textContent = events[id].length + " " + ((events[id].length > 1) ? "events" : "event");

		var div;
		var close;
		// For each event
		for (var i = 0; i < events[id].length; i++) {
			div = document.createElement("div");
			div.className = "event-item";
			div.textContent = (i + 1) + ". " + events[id][i].name + " at " + events[id][i].time;
			elements.list.appendChild(div);
			close = document.createElement("div");
			close.className = "close";
			close.textContent = "×";
			div.appendChild(close);
			close.addEventListener("click", (function (date, index) {
				return function () {
					removeEvent(date, index);
				}
			})(date, i), false);
		}
	} else {
		elements.subtitle.textContent = "No events";
	}
};

var removeEvent = function (date, index) {
	// Date string
	var id = jsCalendar.tools.dateToString(date, date_format, "en");

	// If no events return
	if (!events.hasOwnProperty(id)) {
		return;
	}
	// If not found
	if (events[id].length <= index) {
		return;
	}

	// Remove event
	events[id].splice(index, 1);

	// Refresh events
	showEvents(current);

	// If no events uncheck date
	if (events[id].length === 0) {
		calendar.unselect(date);
	}
}

// Show current date events
showEvents(new Date());

// Add events
calendar.onDateClick(function(event, date){
	// Update calendar date
	calendar.set(date);
	// Show events
	showEvents(date);
});
