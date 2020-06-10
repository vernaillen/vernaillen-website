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
 * Created the song using Ableton Live, Arturia MiniV3, GSi VB3-II and Roland TR-8S and uploaded it to SoundCloud.
 * Upon load of this page:
    * the song metadata is fetched using the SoundCloud API
    * a Tone.Player is created which will start buffering the audio stream
    * an AudioMotion Analyzer is attached to the Tone.Player
 * Upon hitting Play (possible once buffering is done):
    * Audio is played using the in browser AudioContext
