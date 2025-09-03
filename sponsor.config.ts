import { defineConfig, tierPresets } from 'sponsorkit';
import { POKI_LOGO, PIXELS_LOGO } from "./sponsor.raw.logos";

export default defineConfig({

  onSponsorsReady: (sponsors) => {
    console.log(sponsors.map(s => ({login:s.sponsor.login, name:s.sponsor.name})));

    // pixels.xyz
    const pixels = sponsors.find((sponsor) => sponsor.sponsor?.login?.toLowerCase() === "lukepushlabs");
    if (pixels) {
      pixels.sponsor.linkUrl = "https://pixels.xyz/";
      pixels.sponsor.websiteUrl = "https://pixels.xyz/";
      pixels.sponsor.name = "Pixels";
      pixels.sponsor.avatarUrl = "https://github.com/colyseus/.github/blob/main/logos/pixels-xyz.jpeg?raw=1";
      pixels.sponsor.avatarBuffer = PIXELS_LOGO;
    }

    // // add bloxd logo from mcarth
    // const mcarth = sponsors.find(s => s.sponsor.login.toLowerCase() === 'mcarth');
    // if (mcarth) {
    //     mcarth.sponsor.type = 'Organization';
    //     mcarth.sponsor.login = 'mcarth';
    //     mcarth.sponsor.name = 'Bloxd';
    //     mcarth.sponsor.websiteUrl = "https://bloxd.io/";
    //     mcarth.sponsor.linkUrl = "https://bloxd.io/";
    //     mcarth.sponsor.avatarUrl = "https://github.com/colyseus/.github/blob/main/logos/bloxd.png?raw=1";
    //     mcarth.sponsor.avatarBuffer = BLOXD_LOGO;
    // }

    sponsors.unshift({
      sponsor: {
        type: 'Organization',
        login: 'poki',
        name: 'Poki',
        avatarUrl: "https://github.com/colyseus/.github/blob/main/logos/poki-svg.svg?raw=1",
        avatarBuffer: POKI_LOGO,
        websiteUrl: "https://developers.poki.com/",
        linkUrl: "https://developers.poki.com/",
      },
      monthlyDollars: 200,
    });

    // remove
    const bubbleboxIndex = sponsors.findIndex((sponsor) => sponsor.sponsor.login.toLowerCase() === "bubbleboxgames");
    if (bubbleboxIndex !== -1) { sponsors.splice(bubbleboxIndex, 1); }

    return sponsors;
  },

  // includePrivate: true,

  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },

    {
      title: 'Backers',
      preset: tierPresets.base,
      // to replace the entire tier rendering
      // compose: (composer, tierSponsors, config) => {
      //   composer.addRaw(
      //     '<-- custom svg -->',
      //   )
      // },
    },

    {
      title: 'Generous Backers',
      monthlyDollars: 30,
      preset: tierPresets.base,
      // to insert custom elements after the tier block
      // composeAfter: (composer, _tierSponsors, _config) => {
      //   composer.addSpan(10)
      // },
    },

    {
      title: 'Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.medium,
    },

    {
      title: 'Silver Sponsors',
      monthlyDollars: 250,
      preset: tierPresets.medium,
    },

    {
      title: 'Gold Sponsors',
      monthlyDollars: 500,
      preset: tierPresets.large,
    },

    {
      title: 'Platinum Sponsors',
      monthlyDollars: 1000,
      preset: tierPresets.xl,
    },
  ],

  renders: [
    {
      name: 'sponsors',
      width: 800,
      formats: ['svg'],
    },
    {
      name: 'sponsors.part1',
      width: 800,
      formats: ['svg'],
      filter: (sponsor) => sponsor.monthlyDollars > 50,
    },
    {
      name: 'sponsors.part2',
      width: 800,
      formats: ['svg'],
      filter: (sponsor) => sponsor.monthlyDollars <= 50,
    },
    {
      name: 'sponsors-circle',
      width: 800,
      formats: ['svg'],
      renderer: "circles",
    },
  ],
});
