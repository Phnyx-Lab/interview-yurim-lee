# 📌 Phnyx Assignment - 프로젝트 개요 및 개발 가이드

## 🚀 프로젝트 실행 방법
### 1️⃣ **프로젝트 클론**
```sh
git clone https://github.com/Phnyx-Lab/interview-yurim-lee.git
cd interview-yurim-lee
```

### 2️⃣ **패키지 설치**
```sh
yarn install
```

### 3️⃣ **로컬 서버 실행**
```sh
yarn dev
```
- 브라우저에서 `http://localhost:5173`에 접속하여 프로젝트 실행 확인

---

## 🏗 **사용한 기술 및 패턴**
### 1️⃣ **Atomic Design Pattern 적용**
- **Atoms:** `Button`, `SelectBox`, `OutputBox` 등 단일 UI 요소
- **Molecules:** `TextInput`, `ModeSelector` 등 복합적인 UI 요소
- **Organisms:** `SummaryForm`, `Sidebar` 등 여러 Molecule을 포함한 컴포넌트
- **Templates:** `InputTemplate` 등 페이지 단위로 조립된 UI
- **Pages:** `SummaryMain` 등 최상위 페이지 컴포넌트

📌 **Atomic Design Pattern을 적용하여 재사용 가능한 UI 컴포넌트를 구조적으로 관리함.**

### 2️⃣ **Emotion Styled 적용**
- `@emotion/styled`를 사용하여 **CSS-in-JS 방식으로 스타일을 적용**
- `shouldForwardProp`을 활용하여 `isExpanded`, `isHidden` 같은 **불필요한 속성이 DOM에 전달되지 않도록 방지**

📌 **스타일이 독립적이며 유지보수가 용이하도록 설계됨.**

### 3️⃣ **Material-UI (MUI) 활용**
- `@mui/material`을 사용하여 **일관된 디자인 시스템을 적용**
- `Box`, `Typography`, `Divider`, `TextField`, `ToggleButtonGroup` 등 MUI 컴포넌트 활용

📌 **MUI를 사용하여 빠르고 반응형 UI를 구현함.**

---

## 🔴 **현재 해결되지 않은 문제**
### ❌ **스크롤 기반 확장(Expansion) 적용 실패**
- 목표: 사용자가 스크롤을 내릴 때 `TopSection`이 사라지고 `SummaryForm`이 확장되도록 구현하려 했으나 정상 작동하지 않음.
- `useEffect`로 `window.scrollY` 값을 감지하는 방식으로 구현을 시도했으나, `SummaryForm`의 크기가 적절하게 조정되지 않음.
- `isExpanded` 상태가 `SummaryForm`, `TextInput`, `OutputBox`에 반영되지 않는 문제 발생.

### ❌ **언어적용 Tab 내 컨텐츠 및 검색기능**
- 시간이 촉박하여 적용하지 못했습니다.

📌 **추후 수정해야 할 사항:**
- `useEffect`를 활용한 스크롤 감지 로직 수정 필요
- `isExpanded` 상태가 `SummaryForm` 내부 모든 컴포넌트에 제대로 반영되도록 구조 개선 필요
- 그 외 아이콘 및 미반영 ui 전체

감사합니다!

-

# 📌 Phnyx Assignment - Project Overview & Development Guide

## 🚀 How to Run the Project
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/Phnyx-Lab/interview-yurim-lee.git
cd interview-yurim-lee
```

### 2️⃣ **Install Dependencies**
```sh
yarn install
```

### 3️⃣ **Start the Local Server**
```sh
yarn dev
```
- Open the browser and visit `http://localhost:5173` to check if the project is running.

---

## 🏗 **Technologies & Design Patterns Used**
### 1️⃣ **Atomic Design Pattern Implementation**
- **Atoms:** Small UI elements like `Button`, `SelectBox`, and `OutputBox`.
- **Molecules:** Components combining multiple atoms, such as `TextInput` and `ModeSelector`.
- **Organisms:** More complex components that include multiple molecules, such as `SummaryForm` and `Sidebar`.
- **Templates:** Structural components like `InputTemplate` that assemble organisms into layouts.
- **Pages:** The highest-level components, such as `SummaryMain`, that form a complete UI page.

📌 **Atomic Design Pattern was applied to ensure modular, reusable, and maintainable UI components.**

### 2️⃣ **Emotion Styled for Styling**
- Used `@emotion/styled` for **CSS-in-JS styling**.
- Applied `shouldForwardProp` to prevent unnecessary props like `isExpanded` and `isHidden` from being passed to the DOM.

📌 **Ensures a clean and scalable styling approach.**

### 3️⃣ **Material-UI (MUI) for UI Components**
- Leveraged `@mui/material` to create a **consistent design system**.
- Used various MUI components like `Box`, `Typography`, `Divider`, `TextField`, and `ToggleButtonGroup`.

📌 **MUI was chosen to ensure a rapid, responsive, and visually consistent UI.**

---

## 🔴 **Unresolved Issues**
### ❌ **Scroll-Based Expansion Not Working**
- **Intended Behavior:** When scrolling down, `TopSection` should disappear, and `SummaryForm` should expand.
- **Current Issue:** `window.scrollY` detection via `useEffect` was attempted, but `SummaryForm` does not dynamically adjust its height properly.
- **Root Cause:** `isExpanded` state is not correctly propagated across `SummaryForm`, `TextInput`, and `OutputBox`.

### ❌ **Incomplete Language Selection & Search Features**
- The implementation of language selection tabs and search functionality was planned but **not completed** due to time constraints.

📌 **Future Fixes Required:**
- Adjust `useEffect` scroll detection logic.
- Ensure `isExpanded` properly updates child components.
- Finalize the integration of missing UI elements like icons and text alignment.

---

**Thank you! Let me know if you need further refinements.** 😊

