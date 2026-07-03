// src/pages/OwnershipStatement.tsx
import React from 'react';

const OwnershipStatement: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ownership Statement</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Last updated: July 1, 2026</p>

      <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          This statement confirms the ownership and operation of this website and the
          ClickPrint service.
        </p>

        <p>
          This website, wecode.com.pk, is owned and operated by WeCode. WeCode is a sole
          proprietorship registered in Pakistan, owned and operated by Shahid Zahoor.
        </p>

        <ul className="space-y-1 list-none">
          <li><span className="font-medium text-gray-900 dark:text-white">National Tax Number (NTN):</span> 3740565477847</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Registered business address:</span> 36, Lane 2, Westridge 3, Rawalpindi, Pakistan</li>
        </ul>

        <p>
          ClickPrint is a product and service owned and operated by WeCode. All services
          offered under the ClickPrint name, including the in-app wallet and payment
          functionality, are provided by WeCode as the responsible legal entity.
        </p>

        <section>
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Contact</h2>
          <p>
            Email: <span className="text-[#d31773] dark:text-[#e85b9e]">support@wecode.com.pk</span>
            <br />
            Phone: +92 323 5400291
          </p>
        </section>
      </div>
    </div>
  );
};

export default OwnershipStatement;
