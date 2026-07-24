// Fix for "Cannot read properties of undefined (reading 'indexOf')"
// This polyfill protects against common undefined/null errors

const originalString = String.prototype.indexOf;
String.prototype.indexOf = function(searchValue, fromIndex) {
    if (typeof searchValue === 'undefined' || searchValue === null) {
        return -1;
    }
    return originalString.call(this, searchValue, fromIndex);
};

// Also fix Array.indexOf
const originalArrayIndexOf = Array.prototype.indexOf;
Array.prototype.indexOf = function(searchElement, fromIndex) {
    if (this === undefined || this === null) {
        return -1;
    }
    return originalArrayIndexOf.call(this, searchElement, fromIndex);
};

// Fix includes method
if (String.prototype.includes) {
    const originalIncludes = String.prototype.includes;
    String.prototype.includes = function(searchString, position) {
        if (typeof searchString === 'undefined' || searchString === null) {
            return false;
        }
        return originalIncludes.call(this, searchString, position);
    };
}

console.log('[CDSS] Error protection loaded');
