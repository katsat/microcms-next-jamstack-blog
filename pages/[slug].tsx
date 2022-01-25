export const getStaticProps = async (context) => {
    const slug = context.params?.slug;
    const draftKey = context.previewData?.draftKey;
    const content = await fetch(
     `https://katsat-blog.microcms.io/api/v1/blog/${slug}${
      draftKey !== undefined ? `?draftKey=${draftKey}` : ''
     }`,
     { headers: { 'X-MICROCMS-API-KEY': process.env.apiKey || '' } }
    )
     .then((res) => res.json());
     return {
       props: {
         content
       }
     };
   };