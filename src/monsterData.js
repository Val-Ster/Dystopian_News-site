const monsters = [
  {
    id: "ash-maw",
    name: "Ash Maw",
    role: "Scavenger Beast (C rank)",
    image: "ash-maw.jpeg",
    description:
      "A lava-crusted monstrosity that feasts on survivors' heat signatures. Its shell is nearly impervious, but its maw is slow to recover.",
    weakness: "Cryo grenades, freeze rays and disruptive sonic pulses.",
    strength: "Armored hide, magma spray, and relentless pursuit.",
  },
  {
    id: "nightwing-stalker",
    name: "Nightwing Stalker",
    role: "Shadow Hunter (B rank)",
    image: "nightwing-stalker.jpeg",
    description:
      "Moves in the dark with bat-like wings and razor claws. It can disappear from sensors when still, making it deadly at close range.",
    weakness: "Bright flare bursts and electric nets.",
    strength: "Extreme stealth and sudden ambush speed.",
  },
  {
    id: "iron-shell-titan",
    name: "Iron Shell Titan",
    role: "Heavy Tank (A rank)",
    image: "iron-shell-titan.jpeg",
    description:
      "A hulking brute with plated armor and a shockwave stomp. It is slow but nearly unstoppable unless it is forced to expose its venting joints.",
    weakness: "Target its rear vent stack and weak joint seams.",
    strength: "High durability and concussive melee force.",
  },
  {
    id: "venom-spine",
    name: "Venom Spine",
    role: "Assassin Crawler (B rank)",
    image: "venomspine.jpeg",
    description:
      "A low, swift predator that injects toxins through barbed spines while remaining hidden in cover.",
    weakness: "Antidote spray and shock wires.",
    strength: "Venomous barrage and quick retreat ability.",
  },
  {
    id: "wasteland-glider",
    name: "Wasteland Glider",
    role: "Aerial Scout (B rank)",
    image: "wasteland-glider.jpeg",
    description:
      "Silent gliders with telescopic eyes scan the horizon and call hunters when they detect movement.",
    weakness: "EMP pulses and armor-piercing netting.",
    strength: "High-speed flight and long-range signaling.",
  },
  {
    id: "rust-jaw",
    name: "Rust Jaw",
    role: "Jawed Devourer (D rank)",
    image: "rust-jaw.jpeg",
    description:
      "Its massive maw chews through steel. It charges with ferocious power, but its exposed underbelly is vulnerable.",
    weakness: "Its underbelly and freezing its jaw muscles.",
    strength: "Bone-crushing bite and armor-busting charge.",
  },
  {
    id: "ember-warden",
    name: "Ember Warden",
    role: "Flame Sentinel (C rank)",
    image: "ember-warden.png",
    description:
      "A guardian creature that breathes fire and thrives in ruined industrial zones. Its core burns hottest at the back.",
    weakness: "Water barriers, freeze ray and cooled steel shields.",
    strength: "Flame projection and heat-resistant armor.",
  },
  {
    id: "cinder-serpent",
    name: "Cinder Serpent",
    role: "Burrowing Predator (C rank)",
    image: "cinder-serpent.png",
    description:
      "Slithers under debris and erupts from the ground. Its skin refracts light, making it hard to track.",
    weakness: "Ground-to-air detonation charges and vibration sensors.",
    strength: "Quick strike, acidic spit, and subterranean movement.",
  },
  {
    id: "rift-howler",
    name: "Rift Howler",
    role: "Psycho Siren (C rank)",
    image: "rift-howler.png",
    description:
      "Emits disorienting wails that disrupt comms, sensory overload and causes excrutiating pain to those who hear it. Its head and throat are its most fragile areas.",
    weakness: "Audio dampeners and precision head shots. They are blind and rely on echo location for sights.",
    strength: "Mind-affecting howl and group coordination boost. They always work in packs.",
  },
  {
    id: "storm-trampler",
    name: "Storm Trampler",
    role: "Charge Brute (S rank)",
    image: "storm-trampler.png",
    description:
      "A heavy, four-legged,10ft tall terror that uses its mass to smash barriers. It can seize terrain and crush any light defenses.",
    weakness: "Trip mines and agile flankers.",
    strength: "Sheer momentum, crushing force, and terrain control.",
  },
  {
    id: "ghost-mire",
    name: "Ghost Mire",
    role: "Swamp Phantasm (A rank)",
    image: "ghost-mire.png",
    description:
      "A wetland apparition that dissolves targets with corrosive mist. It is hard to see in fog and more dangerous in groups.",
    weakness: "Clear flare smoke and high-ground strikes.",
    strength: "Toxin cloud, camouflage, and corrosive touch.",
  },
  {
    id: "scarab-warden",
    name: "Scarab Warden",
    role: "Armored Swarm (B rank)",
    image: "scarab-warden.png",
    description:
      "A thick-shelled insectoid that gathers in swarms. Its mandibles lock onto prey while its carapace deflects attacks.",
    weakness: "Acid spray and electrical disruption.",
    strength: "Swarming defense and hardened exoskeleton.",
  },
];

export default monsters;
