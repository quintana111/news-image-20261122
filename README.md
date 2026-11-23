# Sunday 22 November 2026 — The World in One Page

[![news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/quintana111/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/quintana111/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

One image summing up Sunday 22 November 2026 in world news: a cream
broadsheet front page with 36 stories in 7 regions — three leads (COP31's
final text landing at dawn in Antalya with no fossil fuels, Russia firing
186 drones at Ukraine overnight with 161 downed, Iran beginning rolling
electricity rationing), ten illustrated cards (Iran's Bahrain radar claim,
Hong Kong's Election Committee vote, India declaring on a record 720/9 in
New Zealand, Verstappen winning the Las Vegas GP, the Sparta II still
burning in the Gulf of Finland, two tankers hit off Oman, four killed in
Gaza, a mourners' boat capsizing in Nigeria, Bolsonaro in intensive care,
the FBI probing a hack of its crime database), a UTC timeline, a segmented
region bar, a dotted world map with 13 numbered pins, and a 23-item "Also"
list. Every headline and figure comes from the day's reporting (Reuters,
BBC, AP, AFP, Al Jazeera, Guardian, SCMP, ESPN, FIA and others); a DATE
CHECK box names the earlier stories deliberately left out. The image is
rendered deterministically with Python PIL and contains no AI-generated art.

## Run

```sh
# Re-render the front page (PIL only; deterministic — two runs are byte-identical)
python3 ../news-image-20261122-work/v2/compose-v2.py

# Copy the entry image to /output/entry.png with sha256 verification
node main.ts
```
