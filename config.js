// The check-in project's web app address (Deploy > Manage deployments >
// Web app URL, ends in /exec). Both pages use it.
var APP_URL = 'https://script.google.com/macros/s/AKfycbxH6lVXqyFvjSkERa3TkG77opTvQjcX8o27vW1480ETXyhzrQ66vPsW2wZCkobPegw/exec';

// ---------------------------------------------------------------------
// PATROL SQUAD ROTATION
//
// Four days on, four days off, A and B alternating: an eight-day cycle.
// Nothing in the apps knows this - the roster works out today's squad
// from who clocked into DTS, and the DTS cache only holds three days -
// so the class calendar counts it forward from the anchor below.
//
// anchor: a date that was the FIRST of a four-day block.
// letter: the squad that started working on that date.
//
// Get it wrong and every date is labelled wrong, so check it against a
// roster you have in front of you before trusting it. While anchor is
// blank the squad labels are simply not shown.
// ---------------------------------------------------------------------
var SQUAD_ROTATION = { anchor: '2026-11-17', letter: 'A', on: 4, off: 4, squads: ['A', 'B'] };
