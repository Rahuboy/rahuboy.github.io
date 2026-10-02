Source for my academic website, [rahuboy.github.io](https://rahuboy.github.io). Plain HTML, CSS and JS with no build step. Design inspired by [Roman Bachmann's website](https://roman-bachmann.github.io/); originally based on [Jon Barron's template](https://github.com/jonbarron/jonbarron_website).

## Updating content

Almost everything lives in **`static/js/content.js`**:

- **News**: add an entry to the top of `NEWS` (`date` is `"YYYY-MM"`). The newest 5 are shown, and the rest go under "Older news".
- **Papers**: add an object to `PUBLICATIONS`. Put images and hover videos in `static/images/`.
- **Collaborators**: add them to `PEOPLE` once, and their names are linked automatically in every author list.
- **Education**: `EDUCATION`.

The bio is in `index.html`. To update the CV, replace `static/Rahul_Ramachandran_CV.pdf`. The current copy is built from the LaTeX source with the phone number removed.

## Layout

```
index.html               page skeleton + bio
static/css/style.css     all styles; colors and fonts are tokens at the top
static/js/content.js     site content (edit this)
static/js/main.js        renders content.js and handles interactions
```

## Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```
