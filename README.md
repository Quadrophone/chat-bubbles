# Chat Bubbles

## Requirements: jQuery

## Support: Chrome, FireFox, Safari, Opera, Edge

## Usage:

Include the CSS and JS on your page.

Create an array of message strings. Call the .chatBubble method on an unordered list element:

```
<ul id="messages"></ul>

<script>
var messages = ['Hi, this is my first message', 'Hello, this is my second message', 'Message message message']

$('#messages').chatBubble({
    messages: messages,
    typingSpeed: 40, // optional, "typing" speed in words per minute. Default: 40
    delay: 1000 // optional, delay before add the next message, in ms. Default: 1000
});
</script>
```

## Demo:
[Here](https://quadrophone.github.io/chat-bubbles/)




