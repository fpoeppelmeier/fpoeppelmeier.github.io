---
layout: page
title: Research
subtitle: Combining paleo reconstructions with Earth system modelling to understand ocean circulation, the carbon cycle and climate transitions.
permalink: /research/
---

<nav class="toc" aria-label="On this page">
  <a href="#mpt">Mid-Pleistocene Transition</a>
  <a href="#trace-metals">Trace metals</a>
  <a href="#amoc">AMOC stability</a>
</nav>

<h2 id="mpt">Understanding glacial-interglacial cycles during the Mid-Pleistocene Transition</h2>

The recent geological past is characterized by the cyclic growth and decay of large continental ice-sheets in the northern hemisphere driven by changes in incoming solar radiation associated with Earth's orbital configuration. These glacial-interglacial cycles initially responded to the 41,000 year pacing of Earth's axial tilt, but about 1 million years ago this periodicity slowed down to ~100,000 year cycles without any discernible change in orbital parameters, thus indicating fundamental shifts in internal feedback mechanisms. My Marie Skłodowska-Curie project aimed towards a comprehensive understanding of this unique climate transition through the employment of the Bern3D Earth System model.

<figure>
  <img src="{{ '/assets/MPT_LR04.jpg' | relative_url }}" alt="Benthic oxygen isotope stack over the past 1.5 million years" loading="lazy">
  <figcaption><b>Figure 1:</b> Benthic δ<sup>18</sup>O stack (‰) of Lisiecki and Raymo (2005) over the past 1,500 kyr. During the Mid-Pleistocene Transition, the dominant periodicity of glacial-interglacial cycles shifted from 41 kyr to ~100 kyr.</figcaption>
</figure>

In order to enable fully dynamical simulations of glacial-interglacial cycles I coupled an ice-sheet model with the exceptionally computationally efficient Bern3D Earth system model of intermediate complexity ([Pöppelmeier et al., 2023](https://doi.org/10.1175/JCLI-D-23-0104.1)). Further, newly compiled paleoclimatic reconstructions form important constraints on the past climate that can be directly compared to the wide palette of tracers implemented in the Bern3D model.

<h2 id="trace-metals">Trace metals as proxies for past water masses</h2>

Many dissolved trace metals in seawater possess the potential to serve as proxies for different water mass characteristics, thus playing a crucial role in reconstructing the past and present state of the ocean.

For instance, in recent decades, neodymium (Nd) isotopes have emerged as a valuable geochemical tracer for determining the provenance of water masses. However, many aspects of the marine Nd cycle remain only poorly understood. I therefore try to further our understanding of this crucial proxy by reconstructing it from marine sediments and comprehensively simulating the Nd cycle using the Bern3D model under various boundary conditions (see [Pöppelmeier et al., 2022](https://doi.org/10.1016/j.quascirev.2022.107404)).

<figure>
  <img src="{{ '/assets/Nd_sketch.png' | relative_url }}" alt="Schematic of the marine neodymium cycle" loading="lazy">
  <figcaption><b>Figure 2:</b> Schematic of the marine Nd cycle along a section from the North Pacific through the Southern Ocean (SO) to the North Atlantic. Nd enters the ocean through dust, rivers and benthic fluxes from the seafloor. It is redistributed by the ocean circulation (black arrows) and by reversible scavenging onto sinking particles (wavy arrows). From Pöppelmeier et al. (2022).</figcaption>
</figure>

I have also worked on the marine chromium (Cr) cycle ([Pöppelmeier et al., 2021](https://doi.org/10.5194/bg-18-5447-2021)). Cr and its isotopes hold great potential as a tracer for past oxygenation and marine biological activity. I implemented this tracer in the Bern3D model and performed first assessments on the first-order controls that shape the global distribution of dissolved Cr and its two most important oxidation states Cr(III) and Cr(VI).

<figure>
  <img src="{{ '/assets/Chromium.png' | relative_url }}" alt="Global map of simulated dissolved chromium concentrations with observations" loading="lazy">
  <figcaption><b>Figure 3:</b> Total dissolved chromium concentration ([Cr]<sub>tot</sub>, nmol kg<sup>−1</sup>) simulated with Bern3D (shading), compared with seawater observations (circles, same colour scale). From Pöppelmeier et al. (2021).</figcaption>
</figure>

Other trace metals and ocean proxies that I'm interested in and that we can explicitly simulate in the Bern3D model are protactinium and thorium (indicator of circulation strength), stable carbon isotopes (indicator of water masses), and radiocarbon (indicator of water mass age and provenance). Within the [BGCTip]({{ "/bgctip/" | relative_url }}) project, we are adding isotope proxies of marine biogeochemistry (δ<sup>15</sup>N, δ<sup>30</sup>Si, δ<sup>138</sup>Ba and δ<sup>60</sup>Ni).

<h2 id="amoc">Stability of the Atlantic Meridional Overturning Circulation</h2>

The Atlantic meridional overturning circulation (AMOC) is a critical constituent of inter-hemispheric redistribution of heat and carbon, and is considered a climate tipping point that might have been crossed in the past. Recent studies suggest that the AMOC transitioned to an anomalous weak state since the mid-twentieth century and could approach a tipping point towards collapse even within the twenty-first century. To better constrain the stability of the AMOC, I am investigating its past behavior by combining reconstructions of proxies (see also above) with model simulations. For more details see our [paper in Nature Geoscience](https://doi.org/10.1038/s41561-023-01140-3).

<figure>
  <img src="{{ '/assets/AMOC.png' | relative_url }}" alt="Simulated and reconstructed Atlantic changes over the past 20,000 years" loading="lazy">
  <figcaption><b>Figure 4:</b> Atlantic changes over the past 20 kyr in a transient Bern3D simulation compared with proxy reconstructions. (a) Greenland and Antarctic temperature (°C), mean ocean temperature (ΔMOT, °C), Iberian Margin benthic-planktic <sup>14</sup>C age (yr), deep NW Atlantic <sup>231</sup>Pa/<sup>230</sup>Th, AMOC change relative to pre-industrial (%) and Atlantic water mass fractions (%). (b–e) Simulated Atlantic depth-time sections (km) of δ<sup>13</sup>C (‰), benthic-planktic <sup>14</sup>C age (kyr), ε<sub>Nd</sub> and Pa/Th, with AMOC strength (Sv, red). From Pöppelmeier et al. (2023).</figcaption>
</figure>
