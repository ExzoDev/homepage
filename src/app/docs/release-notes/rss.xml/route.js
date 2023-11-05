/* eslint-disable import/prefer-default-export */
import Rss from 'rss';

import { RELEASE_NOTES_BASE_PATH } from 'constants/docs';
import { RELEASE_NOTES_DIR_PATH, getAllReleaseNotes, getPostBySlug } from 'utils/api-docs';
import getReleaseNotesDateFromSlug from 'utils/get-release-notes-date-from-slug';

const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;

export async function GET() {
  const allReleaseNotes = await getAllReleaseNotes();

  const feed = new Rss({
    id: RELEASE_NOTES_BASE_PATH,
    language: 'en',
    title: `Release notes — Exzo Network Docs`,
    description: 'The latest product updates from Exzo Network',
    feed_url: `${SITE_URL}${RELEASE_NOTES_BASE_PATH}rss.xml`,
    site_url: SITE_URL,
  });

  allReleaseNotes.forEach((post) => {
    const { slug } = post;
    // TODO: Add excerpt to release notes
    const { excerpt } = getPostBySlug(slug, RELEASE_NOTES_DIR_PATH);
    const url = `${SITE_URL}${RELEASE_NOTES_BASE_PATH}${slug}`;
    const category = slug.slice(slug.lastIndexOf('-') + 1);
    const capitalisedCategory = category.charAt(0).toUpperCase() + category.slice(1);

    const { datetime } = getReleaseNotesDateFromSlug(slug);

    feed.item({
      id: url,
      title: `${capitalisedCategory} release`,
      url,
      guid: url,
      date: new Date(datetime),
      categories: [category],
      description: excerpt,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
