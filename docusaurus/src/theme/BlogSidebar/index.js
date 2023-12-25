import React from 'react';
import {useWindowSize} from '@docusaurus/theme-common';
import BlogSidebarDesktop from '@theme/BlogSidebar/Desktop';
import BlogSidebarMobile from '@theme/BlogSidebar/Mobile';

const categories = [
  {
    title: 'Hong Kong',
    permalink: '/blog/tags/hong-kong',
  }, {
    title: 'NNS',
    permalink: '/blog/tags/nns',
  }
]

export default function BlogSidebar({sidebar}) {
  const windowSize = useWindowSize();
  if (!sidebar?.items.length) {
    return null;
  }
  // Mobile sidebar doesn't need to be server-rendered
  if (windowSize === 'mobile') {
    return <BlogSidebarMobile sidebar={{ ...sidebar, categories }} />;
  }
  return <BlogSidebarDesktop sidebar={{ ...sidebar, categories }} />;
}
