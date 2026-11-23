# Sunday 22 November 2026 — The World in One Page

[![news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/quintana111/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/quintana111/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

One image summing up Sunday 22 November 2026 in world news: a cream
broadsheet front page with 48 stories in 7 regions — three leads (COP31's
final text landing at dawn in Antalya, Russia firing 186 drones at Ukraine
overnight with 161 downed, Iran claiming Patriot radar strikes in Bahrain),
twelve illustrated cards (Bitcoin back above $60,000, France seeking UN
action on Myanmar, missiles hitting Kryvyi Rih, the Sinaloa cartel capture,
two tankers hit off Oman, the Basra power-plant fire, four killed in Gaza,
Trump on an Iran deal, more Ukraine ceasefires, Hegseth's Canada limits,
the US airlines terror warning, England thrashing the All Blacks 37-12),
a UTC timeline, BY FIELD and BY REGION count strips, a dotted-halftone
world map with 15 numbered pins, and a 33-item "Also" list. Every
illustrated card carries a big colour-coded certainty chip on its art
(CONFIRMED / REPORTED / CLAIM / PENDING). Every headline and figure comes
from the day's reporting (Reuters, AP, CNN, AFP, Al Jazeera, BBC, CoinDesk,
Fox News and others); a DATE CHECK box names the earlier stories
deliberately left out. The image is rendered deterministically with Python
PIL and contains no AI-generated art — every picture is drawn in code.

## Run

```sh
# Re-render the front page (PIL only; deterministic — two runs are byte-identical)
python3 ../news-image-20261122-work/v3/compose-v3.py

# Copy the entry image to /output/entry.png with sha256 verification
node main.ts
```
