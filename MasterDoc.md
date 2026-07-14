Hubbards on the Hitch
Campground Data Standard v1.0
Purpose

This document defines the official standards for every campground page on Hubbards on the Hitch. All campground JSON files should follow these guidelines to ensure consistency, accuracy, and a great visitor experience.

1. Philosophy

The goal is not to duplicate Campendium, RV Life, or campground websites.

Instead, every campground page should answer:

"Would I enjoy staying here?"

Each page should combine factual campground information with honest, first-hand experiences.

The campground itself is only part of the story.

2. Campground Status
Status	Meaning
starter	Basic information completed. No personal review yet.
complete	Personally reviewed with photos and/or video.
planned	Future trip planned but not yet visited.
3. File Naming

Campground JSON

shortname.json

Examples

rickettsglen.json
anchordown.json
bluequartz.json

Avoid dates in filenames.

4. Campground Index

Every campground should appear in campgrounds.json.

Fields:

{
  "id":"",
  "name":"",
  "state":"",
  "state_code":"",
  "latitude":0,
  "longitude":0,
  "filename":""
}

Use short filenames.

5. IDs

IDs should never contain dates.

Good

ricketts-glen-state-park

Bad

ricketts-glen-state-park-2026

Multiple visits belong in

visitYears

not the ID.

6. Visit History

Every campground should include

"visitYears":[
  2021,
  2024
],
"visitCount":2

If the year is unknown

"visitYears":[]

Never guess.

7. Campground Types

Use consistent types.

Examples

State Park
National Park Campground
COE Campground
Regional Park
KOA Holiday
KOA Journey
KOA Resort
RV Park
RV Resort
Luxury RV Resort
Harvest Host
City Park
County Park
Fairgrounds
8. Yes / No Standards

Avoid

true
false

Instead use

Yes
No

or descriptive text.

Examples

"wifi":"Excellent"

"wifi":"Fair"

"waterAtSite":"All Sites"

"waterAtSite":"Nearby Hydrants"
9. Cell Service

Use real-world descriptions.

Excellent
Good
Fair
Weak
None

Avoid vague wording whenever possible.

10. Amenities

Every campground should include the same amenity fields, even if the answer is "No."

This keeps comparison easy.

11. Activities

Activities describe what can be done inside the campground or park.

Examples

Hiking
Fishing
Swimming
Paddleboarding
12. Nearby Attractions

Nearby attractions describe destinations outside the campground.

Examples

National Parks
Museums
Scenic Drives
Historic Towns
Lighthouses
Wineries

Activities and attractions should always remain separate.

13. Site Features

Describe the campsite experience.

Examples

level
shade
Starlink performance
spacing
road width
maneuverability
patio
waterfront
favorite loops
14. Starlink

Whenever possible mention

Excellent
Good
Difficult
Impossible

This is one of the most valuable pieces of information for RVers.

15. Favorite Sites

If applicable

"favoriteSites":[
"B46",
"52"
]

If unknown

[]
16. Reviews

Every review should be written from personal experience.

A review should answer

What stood out?
Who would enjoy this campground?
Who might not?
Would you stay again?
Any surprises?
Any tips?

Avoid generic descriptions copied from campground websites.

17. Memory Capture

For every campground, capture the one thing you'll always remember.

Examples

Fredericksburg KOA

Perfect shake-down campground after buying a new RV.

Outer Banks KOA

Incredible sunsets. Incredible mosquitoes.

Bethpage

Kids disappeared all day making friends.

Ricketts Glen

No cell service whatsoever.

These memories become the heart of the review.

18. Honest Reviews

Not every campground needs five stars.

It's okay to say

Families will love this.

or

This wasn't really my style.

Honest reviews build trust.

19. Photos

Photo captions should describe what the visitor is seeing.

Good

Lake View from Site 42

Sunset over Currituck Sound

Site B46

Falls Trail Waterfall

Avoid generic captions like

Picture 1

Campground
20. Videos

If available

Include YouTube embed URLs.

Videos should support—not replace—the written review.

21. Future Features

Each campground may eventually include:

⭐ Hubbards Choice Awards
👍 Best For...
👎 Not Ideal If...
🚐 Starlink Rating
🐶 Dog Friendly Notes
🛒 Shopping Convenience
🚲 Bikeability
🥾 Best Hikes Nearby
🌅 Best Sunrise/Sunset
📶 Remote Work Rating
🛶 Water Recreation Rating
👨‍👩‍👧 Family Friendliness
🤫 Quiet Factor
My favorite addition

There's one thing I'd add that I haven't mentioned before because I wanted to see how this evolved naturally:

22. Hubbards Notes

A short, personal callout that appears near the top of every page.

For example:

💬 Hubbards Note: This is where we took both of our new campers on their very first trip. It's the perfect "shake-down" campground thanks to all the nearby shopping and easy access to I-95.

Or:

💬 Hubbards Note: We absolutely loved the sunsets here—but don't forget bug spray. The mosquitoes are relentless!

Or:

💬 Hubbards Note: If you're coming for the waterfalls, download your maps before you arrive. You'll likely have no cell service once you're in the park.

I think these little notes could become the signature feature of Hubbards on the Hitch. They immediately tell visitors, "Here's the one thing you should know," in a way that's personal, memorable, and uniquely yours. I can already imagine people reading those before anything else on the page.
