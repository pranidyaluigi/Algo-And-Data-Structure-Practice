/* 
Create a class NotesStore
each note having a state and a name.
valid states for notes are "completed","active", and "others"
all other states are invalid

the class must have following methods:
1. addNote(state, name): adds a note with the given name and state to the collection, in addition to that :
- if the passed name is empty, then it throws an error with the message "Name cannot be empty"
- if passed name is non-empty but the given state is not a valid state for a note, then it throws an Error with message "Invalid state (state)"
2. getNotes(state) return an array of names of notes with the given state added so far. the names are returned in the order the corresponding notes were added. In addition to that:
- if the given state is not a valid note state, then it throws an error with the message "Invalid state (state)"
- if no note is found in this state, it returns an empty array

Note: The state names are case-sensitive

The functions will be called with those parameters, and the result of their executions will be printed to the standard output by the provided code.

The stubbed code joins the strings returned by the getNotes function with a comma and prints to the standard output.

If getNotes returns an empty array, the stubbed code prints "No Notes". The stubbed code also prints messages of all the thrown errors.
*/

class NotesStore {
  collection = [];
  states = ["active", "completed", "others"];
  addNote(state, name) {
    if (!name) {
      throw new Error("Name cannot be empty");
    }
    if (!this.states.includes(state)) {
      throw new Error(`Invalid state ${state}`);
    }
    this.collection.push({
      state,
      name,
    });
  }
  getNotes(state) {
    if (!this.states.includes(state)) {
      throw new Error(`Invalid state ${state}`);
    }
    return this.collection.filter((x) => x.state === state).map((x) => x.name);
  }
}

/* 
Expectation:
addNote active DrinkTea
addNote active DrinkCoffee
addNote completed Study
getNotes active >> DrinkTea, DrinkCoffee
getNotes completed >> Study
getNotes foo >> Error: Invalid state foo
*/
