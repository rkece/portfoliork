# SEO Deployment Checklist

## 🚀 Before Deploying to Production

### 1. Update All URLs
Replace `https://rakeshkumar.dev/` with your actual domain in:

**index.html:**
- [ ] Line ~23: `<meta property="og:url" content="..." />`
- [ ] Line ~30: `<meta name="twitter:url" content="..." />`
- [ ] Line ~40: `<link rel="canonical" href="..." />`
- [ ] Line ~185: JSON-LD `"url": "..."`
- [ ] Line ~26: `<meta property="og:image" content="..." />`
- [ ] Line ~35: `<meta name="twitter:image" content="..." />`

**robots.txt:**
- [ ] Line 8: Update sitemap URL

**sitemap.xml:**
- [ ] Update all `<loc>` tags with your actual domain
- [ ] Update `<lastmod>` dates to current date

---

## 📋 After Deployment

### Google Search Console
- [ ] Go to https://search.google.com/search-console
- [ ] Add your property (website URL)
- [ ] Verify ownership (already done via meta tag)
- [ ] Submit sitemap.xml
- [ ] Request indexing for homepage

### Test Social Media Previews
- [ ] Facebook Debugger: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
- [ ] LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

### Optional but Recommended
- [x] Set up Google Analytics ✅ **COMPLETED**
- [ ] Create and add favicon files
- [ ] Set up Google Tag Manager (for advanced tracking)
- [ ] Create a blog section for regular content updates

---

## 🎯 SEO Best Practices (Ongoing)

### Content Updates
- [ ] Update meta description when adding new projects
- [ ] Add new skills to keywords and JSON-LD
- [ ] Keep lastmod dates current in sitemap.xml
- [ ] Maintain consistent branding across all platforms

### Performance
- [ ] Optimize images (compress rk.jpg)
- [ ] Enable HTTPS (SSL certificate)
- [ ] Use CDN for faster loading
- [ ] Minimize CSS/JS files

### Monitoring
- [ ] Check Google Search Console weekly
- [ ] Monitor keyword rankings
- [ ] Track organic traffic growth
- [ ] Fix any crawl errors immediately

---

## 📊 Success Metrics to Track

### Week 1-2
- [ ] Site indexed by Google
- [ ] Appears in search for "Rakesh Kumar M M"
- [ ] Social media previews working

### Month 1
- [ ] Ranking for primary keywords
- [ ] 50+ impressions in Search Console
- [ ] 10+ organic clicks

### Month 3
- [ ] Ranking in top 10 for name
- [ ] 200+ impressions
- [ ] 50+ organic clicks
- [ ] Featured in local developer searches

---

## 🔧 Quick Fixes

### If Not Appearing in Search
1. Check robots.txt isn't blocking crawlers
2. Verify Google Search Console ownership
3. Submit sitemap manually
4. Request indexing via Search Console

### If Social Previews Not Working
1. Clear cache in debugger tools
2. Verify image URLs are absolute (not relative)
3. Check image file size (< 5MB recommended)
4. Ensure images are publicly accessible

### If Rankings Are Low
1. Add more relevant content
2. Get backlinks from other sites
3. Improve page load speed
4. Update content regularly

---

## ✅ Current Status

**Completed:**
- ✅ Meta tags (description, keywords, author)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ Google Search Console verification
- ✅ robots.txt created
- ✅ sitemap.xml created
- ✅ Canonical URL
- ✅ Theme color

**Pending:**
- ⏳ Update URLs to production domain
- ⏳ Deploy to hosting
- ⏳ Submit to Google Search Console
- ⏳ Add favicon
- ⏳ Set up analytics

---

## 📞 Resources

- **SEO Guide**: See SEO_GUIDE.md for detailed documentation
- **Google Search Console**: https://search.google.com/search-console
- **Schema Validator**: https://validator.schema.org/
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Favicon Generator**: https://realfavicongenerator.net/

---

**Last Updated**: February 2, 2026
