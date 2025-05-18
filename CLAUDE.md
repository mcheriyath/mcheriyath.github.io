# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a personal portfolio website for Mithun Cheriyath, hosted at cheriyath.com. The site is built using:
- Bootstrap 4
- jQuery
- SCSS for styling
- Gulp for build and development tasks

The site is hosted on GitHub Pages with a custom domain (cheriyath.com).

## Commands

### Development Commands

```bash
# Install dependencies
npm install

# Start development server with live reload
npm start   # This runs 'gulp watch'

# Build site
gulp build

# Compile SCSS to CSS
gulp css

# Minify JavaScript
gulp js

# Copy vendor dependencies
gulp vendor
```

### Build Process

The site uses Gulp to:
1. Process SCSS files into CSS
2. Minify CSS and JavaScript files
3. Copy vendor dependencies from node_modules
4. Provide a live development server with hot reloading

## Project Structure

- `/scss/` - SCSS source files
  - `freelancer.scss` - Main SCSS file that imports all partials
  - Partial files for different components (`_navbar.scss`, `_portfolio.scss`, etc.)
- `/css/` - Compiled CSS (don't edit directly)
- `/js/` - JavaScript files
- `/img/` - Image assets
- `/vendor/` - Third-party libraries (generated from npm packages)

## Deployment

The site is deployed on GitHub Pages with a custom domain:
- The repository name 'mcheriyath.github.io' follows GitHub Pages convention
- The CNAME file contains 'cheriyath.com' for custom domain configuration
- Changes pushed to the 'master' branch are automatically deployed

## Content Updates

To update the portfolio content:
- Edit `index.html` for page structure and content
- Update SCSS files in `/scss/` directory for styling changes 
- Add or replace images in `/img/` directory
- Run the build process after making changes