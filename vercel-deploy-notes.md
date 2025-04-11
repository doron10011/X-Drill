# Vercel Deployment Fixes

Two issues were fixed for a successful Vercel deployment:

1. **Icon Import Error**: The `FaUserHardHat` icon doesn't exist in the react-icons/fa package. It was replaced with the correct icon:

   - Changed `FaUserHardHat` to `FaHardHat` in `app/contact/page.tsx`

2. **Type Error in Cart Page**: Fixed a type mismatch in cart/page.tsx where passing a string|number to a state setter expecting number|null caused a build failure:
   - Modified the `setUpdateAnimation` call in `handleUpdateQuantity` function to convert string IDs to numbers:
   ```tsx
   setUpdateAnimation(typeof id === "string" ? parseInt(id, 10) : id);
   ```

These changes should resolve the build errors on Vercel deployment.
