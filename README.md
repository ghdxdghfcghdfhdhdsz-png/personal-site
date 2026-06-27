# 王鑫溢 Personal Website

一个纯静态个人主页，可以直接部署到 GitHub Pages、Vercel、Netlify 或任意静态托管服务。

## 本地预览

```bash
python3 -m http.server 5173
```

然后打开：

```text
http://localhost:5173/
```

## GitHub Pages 发布

1. 在 GitHub 新建一个公开仓库，例如 `personal-site`。
2. 把本目录文件推送到仓库的 `main` 分支。
3. 打开仓库 `Settings` -> `Pages`。
4. `Build and deployment` 选择 `Deploy from a branch`。
5. `Branch` 选择 `main`，目录选择 `/root`，保存。
6. 等待部署完成后，访问：

```text
https://你的GitHub用户名.github.io/personal-site/
```

## Vercel / Netlify 发布

这个站点不需要构建命令：

- Build command 留空
- Output directory 填 `.`
- Framework 选择 `Other` 或 `Static`

## 当前照片

首页主视觉照片已经放在：

```text
assets/wang-xinyi-photo.jpg
```

后续如果想换照片，把新照片放进 `assets/`，然后把 `index.html` 里的这一行：

```html
<img src="./assets/wang-xinyi-photo.jpg" alt="王鑫溢在海边的个人照片" />
```

改成新的文件名即可，例如：

```html
<img src="./assets/me.jpg" alt="王鑫溢的个人照片" />
```
