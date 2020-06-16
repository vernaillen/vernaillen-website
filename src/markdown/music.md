---
title: Music
pageName: Music
desc:
date:
author: Wouter
location: Zottegem
---

For the last year and a half I've been having a lot of fun with music production and lately I also started having fun with web audio programming.

On this page you can see the 2 coming together:
 * Played around with [Ableton Live](https://www.ableton.com/en/live/), [Arturia Mini V](https://www.arturia.com/products/analog-classics/mini-v/overview), [GSi VB3-II](https://www.genuinesoundware.com/?a=showproduct&b=44) and [Roland TR-8S](https://www.roland.com/global/products/tr-8s/) and uploaded 2 test tracks to [SoundCloud](https://soundcloud.com/woutervernaillen).
 * Upon load of this page:
    * all tracks from my SoundCloud profile are fetched using the [SoundCloud API](https://developers.soundcloud.com/docs/api/reference)
    * a [Tone.Player](https://tonejs.github.io/docs/Player) is created which will start buffering the audio stream of the latest track
    * an [AudioMotion Analyzer](https://audiomotion.dev/) is attached to the Tone.Player
 * Upon hitting Play (possible once buffering is done):
    * Audio is played using the in browser AudioContext
