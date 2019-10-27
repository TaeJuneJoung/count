# 찬성과 반대 카운팅 사이트

## 사이트 제작 이유

 교회에서 임원을 뽑는 시기이며, 단일 후보에 대해 찬성과 반대 표로 인하여 수기로 세야하는 불편함이 있었다. 이를 해결하기 위해 클릭으로 바로 확인할 수 있게 처리

## 추가요소

- 디자인은 개인적으로 크게 하지 않을 예정.

- css @media 정도는 고려해볼 것.

- 단일 후보가 아닐 때도 할 수 있게 해야함.

## 개발일지

### .innerText / .textContent 차이

**innerText**
1. CSS 소스가 반영됨
2. reflow(리플로우) 발생
3. `<script>`, `<style>` element 내에 포함된 text 노드 무시
4. 텍스트를 정규화 해서 return
(textContent는 마크업만 제거하여 return)

참고사이트: https://programmer-seva.tistory.com/59

## 개발 후기

### v1.beta
처음엔 alpha type으로 파일만 공유하려고 하였으나, 카톡에서 html 파일이 공유가 안됨.
편리성을 위해 주소로 제공해야한다면, 우선 github pages를 이용하자.