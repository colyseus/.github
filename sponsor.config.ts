import { defineConfig, presets } from 'sponsorkit';
import { BLOXD_LOGO, POKI_LOGO } from "./sponsor.raw.logos";

export default defineConfig({

  onSponsorsReady: (sponsors) => {
    // add bloxd logo from mcarth
    const mcarth = sponsors.find(s => s.sponsor.login.toLowerCase() === 'mcarth');
    if (mcarth) {
        mcarth.sponsor.type = 'Organization';
        mcarth.sponsor.login = 'mcarth';
        mcarth.sponsor.name = 'Bloxd';
        mcarth.sponsor.websiteUrl = "https://bloxd.io/";
        mcarth.sponsor.linkUrl = "https://bloxd.io/";
        mcarth.sponsor.avatarUrl = BLOXD_LOGO;
        delete mcarth.sponsor.avatarUrlHighRes;
        delete mcarth.sponsor.avatarUrlLowRes;
        delete mcarth.sponsor.avatarUrlMediumRes;
    }

    sponsors.unshift({
      sponsor: {
        type: 'Organization',
        login: 'poki',
        name: 'Poki',
        avatarUrl: POKI_LOGO,
        websiteUrl: "https://developers.poki.com/",
        linkUrl: "https://developers.poki.com/",
      },
      monthlyDollars: 200,
    });

    // remove
    const bubbleboxIndex = sponsors.findIndex((sponsor) => sponsor.sponsor.login.toLowerCase() === "bubbleboxgames");
    if (bubbleboxIndex !== -1) {
      sponsors.splice(bubbleboxIndex, 1);
    }

    return sponsors;
  },

  // includePrivate: true,

  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },

    {
      title: 'Backers',
      preset: presets.base,
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
      preset: presets.base,
      // to insert custom elements after the tier block
      // composeAfter: (composer, _tierSponsors, _config) => {
      //   composer.addSpan(10)
      // },
    },

    {
      title: 'Sponsors',
      monthlyDollars: 100,
      preset: presets.medium,
    },

    {
      title: 'Silver Sponsors',
      monthlyDollars: 250,
      preset: presets.medium,
    },

    {
      title: 'Gold Sponsors',
      monthlyDollars: 500,
      preset: presets.large,
    },

    {
      title: 'Platinum Sponsors',
      monthlyDollars: 1000,
      preset: presets.xl,
    },
  ],
});
