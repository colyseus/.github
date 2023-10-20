import { defineConfig, presets } from 'sponsorkit';
import { POKI_LOGO } from "./sponsor.raw.logos";

export default defineConfig({

  onSponsorsReady: (sponsors) => {
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
    })
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
