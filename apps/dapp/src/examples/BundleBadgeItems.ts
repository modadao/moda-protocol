import Vinyl_Badge from '../../public/bundle_badge/Vinyl_Badge.jpg';

const bundleBadgeType = {
  badgeName: 'Vinyl',
  badgeImage: {
    url: Vinyl_Badge,
  },
  badgeDescription: 'Vinyl Badge',
};

export const bundleBadgeItems = [
  {
    id: '1',
    titleOverride: 'Vinyl',
    link: 'https://www.drop.audio',
    buttonLinkText: 'Claim Vinyl',
    signedUrlFileName: 'Vinyl_Badge.jpg',
    bundleBadgeType: bundleBadgeType,
    download: {
      url: 'https://www.drop.audio',
    },
  },
];
